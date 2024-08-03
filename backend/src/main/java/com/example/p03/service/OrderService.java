package com.example.p03.service;

import org.springframework.stereotype.Service;

import com.example.p03.model.Client;
import com.example.p03.model.Order;
import com.example.p03.model.ShippingAddress;
import com.example.p03.repository.ClientRepository;
import com.example.p03.repository.OrderRepository;
import com.example.p03.repository.ShippingAddressRepository;
import com.example.p03.dto.CreateOrderDTO;
import com.example.p03.dto.CreateShippingAddressDTO;
import com.example.p03.dto.OrderDTO;
import com.example.p03.dto.ShippingAddressDTO;
import com.example.p03.exception.ExcepcionRecursoNoEncontrado;
import com.example.p03.mapper.OrderMapper;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.Date;

@Service
public class OrderService {
    private final OrderRepository orderRepository;
    private final OrderMapper orderMapper;
    private final ClientRepository clientRepository;
    private final ShippingAddressRepository shippingAddressRepository;

    public OrderService(OrderRepository orderRepository, OrderMapper orderMapper, ClientRepository clientRepository, ShippingAddressRepository shippingAddressRepository) {
        this.orderRepository = orderRepository;
        this.orderMapper = orderMapper;
        this.clientRepository = clientRepository;
        this.shippingAddressRepository = shippingAddressRepository;
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
}
