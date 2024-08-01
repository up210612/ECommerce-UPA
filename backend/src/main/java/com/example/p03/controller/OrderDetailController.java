package com.example.p03.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.p03.model.OrderDetails;
import com.example.p03.service.OrderDetailService;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping({"/orderDetail"})
public class OrderDetailController {
    private final OrderDetailService OrderDetailService;

    public OrderDetailController(OrderDetailService OrderDetailService){
        this.OrderDetailService = OrderDetailService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<OrderDetails>> getOrderDetails() {
        return ResponseEntity.ok(OrderDetailService.getOrderDetails());

    }
    
    
    
}
