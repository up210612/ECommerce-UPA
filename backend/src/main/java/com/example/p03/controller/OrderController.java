package com.example.p03.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.p03.dto.CreateOrderDTO;
import com.example.p03.dto.CreateShippingAddressDTO;
import com.example.p03.dto.OrderDTO;
import com.example.p03.dto.ShippingAddressDTO;
import com.example.p03.model.Order;
import com.example.p03.service.OrderService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.*;

@RestController
@RequestMapping({"/orders"})
public class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService orderService){
        this.orderService = orderService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<OrderDTO>> getOrders() {
        return ResponseEntity.ok(orderService.getOrders());
    }

    @PostMapping("/addOrder")
    @ResponseStatus(HttpStatus.CREATED)
    public OrderDTO saveAddress(@Valid @RequestBody CreateOrderDTO data) {
        return orderService.save(data);
    }
    
}
