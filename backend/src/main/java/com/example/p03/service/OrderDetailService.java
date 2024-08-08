package com.example.p03.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.p03.dto.CreateOrderDetailDTO;
import com.example.p03.dto.OrderDetailsResponseDTO;
import com.example.p03.exception.ExcepcionRecursoNoEncontrado;
import com.example.p03.mapper.OrderDetailMapper;
import com.example.p03.model.Order;
import com.example.p03.model.OrderDetails;
import com.example.p03.model.OrderDetailsId;
import com.example.p03.model.Product;
import com.example.p03.repository.OrderDetailRepository;
import com.example.p03.repository.OrderRepository;
import com.example.p03.repository.ProductRepository;

import java.util.stream.Collectors;


@Service
public class OrderDetailService {
    private final OrderDetailRepository orderDetailRepository;
    private final OrderDetailMapper orderDetailMapper;
    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;

    public OrderDetailService(OrderDetailRepository orderDetailRepository, OrderDetailMapper orderDetailMapper, OrderRepository orderRepository,
                                ProductRepository productRepository ) {
        this.orderDetailRepository =orderDetailRepository;
        this.orderDetailMapper = orderDetailMapper;
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
    }
    public List<OrderDetails> getOrderDetails(){
        return orderDetailRepository.findAll();
    }

    public List<OrderDetailsResponseDTO> getOrderDetailsDTO() {
        return orderDetailRepository.findAll().stream()
                .map(orderDetailMapper::toResponseDTO)
                .collect(Collectors.toList());
    }

    public OrderDetailsResponseDTO saveOrderDetails(CreateOrderDetailDTO createOrderDetailDTO) throws ExcepcionRecursoNoEncontrado {
        OrderDetails orderDetails = orderDetailMapper.toModel(createOrderDetailDTO);

        Optional<Order> order = orderRepository.findById(createOrderDetailDTO.getIdOrder());
        Optional<Product> product = productRepository.findById(createOrderDetailDTO.getIdProduct());


        orderDetails.setOrder(order.get());
        orderDetails.setProduct(product.get());

        if (!order.isPresent()) {
            throw new ExcepcionRecursoNoEncontrado("Order not found with id: " + createOrderDetailDTO.getIdOrder());
        }

        if (!product.isPresent()) {
            throw new ExcepcionRecursoNoEncontrado("Product not found with id: " + createOrderDetailDTO.getIdProduct());
        }

        OrderDetailsId orderDetailsId = new OrderDetailsId(createOrderDetailDTO.getIdOrder(), createOrderDetailDTO.getIdProduct());
        orderDetails.setId(orderDetailsId);

        OrderDetails savedOrderDetails = orderDetailRepository.save(orderDetails);
        return orderDetailMapper.toResponseDTO(savedOrderDetails);
    }

    public OrderDetails saveOrderDetails2(OrderDetails data){
        return orderDetailRepository.save(data);
    }
    
}
