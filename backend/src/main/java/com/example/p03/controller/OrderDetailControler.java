package com.example.p03.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.p03.dto.CreateOrderDetailDTO;
import com.example.p03.dto.OrderDetailsResponseDTO;
import com.example.p03.exception.ExcepcionRecursoNoEncontrado;
import com.example.p03.model.OrderDetails;
import com.example.p03.service.OrderDetailService;

import jakarta.validation.Valid;

import java.util.*;

@RestController
@RequestMapping({"/orderDetails"})
public class OrderDetailControler {
    private final OrderDetailService orderDetailService;

    public OrderDetailControler(OrderDetailService orderDetailService){
        this.orderDetailService = orderDetailService;
    }

    @GetMapping({"/all"})
    public ResponseEntity<List<OrderDetailsResponseDTO>> getAll(){
        return ResponseEntity.ok(orderDetailService.getOrderDetailsDTO());
    }

    @GetMapping({"/all2"})
    public ResponseEntity<List<OrderDetails>> getAll2(){
        return ResponseEntity.ok(orderDetailService.getOrderDetails());
    }

    @PostMapping({"/save"})
    @ResponseStatus(HttpStatus.CREATED)
    public OrderDetailsResponseDTO test( @Valid @RequestBody CreateOrderDetailDTO createOrderDetailsResponseDTO) throws ExcepcionRecursoNoEncontrado{
        return orderDetailService.saveOrderDetails(createOrderDetailsResponseDTO);
    }
}
