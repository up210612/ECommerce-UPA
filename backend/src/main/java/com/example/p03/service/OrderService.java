package com.example.p03.service;

import org.springframework.stereotype.Service;
import com.example.p03.model.Order;
import com.example.p03.model.ShippingAddress;
import com.example.p03.repository.OrderRepository;
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

    public OrderService(OrderRepository orderRepository, OrderMapper orderMapper) {
        this.orderRepository = orderRepository;
        this.orderMapper = orderMapper;
    }

    public List<Order> getOrders(){
        return orderRepository.findAll();
    }

    public OrderDTO save(CreateOrderDTO data){
        Order model = orderMapper.toModel(data);
        Order result = orderRepository.save(model);
        return orderMapper.toDTO(result);
    }
}
