package com.example.p03.service;

import org.springframework.stereotype.Service;

import com.example.p03.model.Client;
import com.example.p03.model.Inventory;
import com.example.p03.model.Order;
import com.example.p03.model.ShippingAddress;
import com.example.p03.repository.ClientRepository;
import com.example.p03.repository.InventoryRepository;
import com.example.p03.repository.OrderRepository;
import com.example.p03.repository.ShippingAddressRepository;
import com.example.p03.dto.CreateFullOrderDTO;
import com.example.p03.dto.CreateOrderDTO;
import com.example.p03.dto.CreateOrderDetailDTO;
import com.example.p03.dto.FullOrderDTO;
import com.example.p03.dto.ItemDTO;
import com.example.p03.dto.OrderDTO;
import com.example.p03.dto.OrderDetailsResponseDTO;
import com.example.p03.exception.ExcepcionRecursoNoEncontrado;
import com.example.p03.mapper.ClientMapper;
import com.example.p03.mapper.OrderMapper;
import com.example.p03.mapper.ShippingAddressMapper;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.ArrayList;

@Service
public class OrderService {
    private final OrderRepository orderRepository;
    private final OrderMapper orderMapper;
    private final ClientRepository clientRepository;
    private final ShippingAddressRepository shippingAddressRepository;
    private final ShippingAddressMapper shippingAddressMapper;
    private final OrderDetailService orderDetailService;
    private final ClientMapper clientMapper;
    private final InventoryRepository inventoryRepository;

    public OrderService(OrderRepository orderRepository, OrderMapper orderMapper, ClientRepository clientRepository, ShippingAddressRepository shippingAddressRepository,ShippingAddressMapper shippingAddressMapper, OrderDetailService orderDetailService, ClientMapper clientMapper,InventoryRepository inventoryRepository) {
        this.orderRepository = orderRepository;
        this.orderMapper = orderMapper;
        this.clientRepository = clientRepository;
        this.shippingAddressRepository = shippingAddressRepository;
        this.shippingAddressMapper = shippingAddressMapper;
        this.orderDetailService = orderDetailService;
        this.clientMapper = clientMapper;
        this.inventoryRepository = inventoryRepository;
    }

    public List<OrderDTO> getOrders(){
        return orderRepository.findAll().stream()
                .map(orderMapper::toResponseDTO)
                .collect(Collectors.toList());
    }

    public OrderDTO save(CreateOrderDTO data){
        Order model = orderMapper.toModel(data);
        Optional<Client> client = clientRepository.findById(data.getIdClient());
        Optional<ShippingAddress> shippingAddress = shippingAddressRepository.findById(data.getIdAddress());

        model.setClient(client.get());
        model.setAddress(shippingAddress.get());
        Order result = orderRepository.save(model);
        return orderMapper.toResponseDTO(result);
    }

    public FullOrderDTO saveFullOrder(CreateFullOrderDTO data) throws ExcepcionRecursoNoEncontrado{
        Optional<Client> client = clientRepository.findById(data.getIdClient());

        ShippingAddress addressModel = shippingAddressMapper.toModel(data.getAddress());
        ShippingAddress addressResult = shippingAddressRepository.save(addressModel);


        CreateOrderDTO order = new CreateOrderDTO();

        order.setIdClient(client.get().getIdClient());
        order.setIdAddress(addressResult.getIdAddress());
        order.setTotalAmount(data.getTotalAmount());
        order.setIdAddress(addressResult.getIdAddress());

        

        Order orderModel = orderMapper.toModel(order);
        orderModel.setClient(client.get());
        orderModel.setAddress(addressResult);
        Order orderResult = orderRepository.save(orderModel);

        List<ItemDTO> items = data.getItems();
        List<OrderDetailsResponseDTO> listOfOrderDetails = new ArrayList<>();
        for(ItemDTO item : items){
            CreateOrderDetailDTO orderDetailDTO = new CreateOrderDetailDTO();
            Inventory inventory = inventoryRepository.InventoryByIdSize(item.getIdProduct(),item.getSize());
            inventory.setAvailableQuantity(inventory.getAvailableQuantity() - item.getQuantity());
            inventoryRepository.save(inventory);

            orderDetailDTO.setIdOrder(orderResult.getIdOrder());
            orderDetailDTO.setIdProduct(item.getIdProduct());
            orderDetailDTO.setQuantity(item.getQuantity());
            orderDetailDTO.setUnitPrice(item.getUnitPrice());

            OrderDetailsResponseDTO orderDetailsResponseDTO = orderDetailService.saveOrderDetails(orderDetailDTO);
            listOfOrderDetails.add(orderDetailsResponseDTO);
        }

        FullOrderDTO fullOrder = new FullOrderDTO();
        
        fullOrder.setOrder(orderMapper.toResponseDTO(orderResult));
        fullOrder.setAddress(addressResult);
        fullOrder.setItems(listOfOrderDetails);
        fullOrder.setClient(clientMapper.toClientDTO(client.get()));

        return fullOrder;
    }
}
