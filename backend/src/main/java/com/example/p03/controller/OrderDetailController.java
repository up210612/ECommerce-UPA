package com.example.p03.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.p03.dto.CreateOrderDetailDTO;
import com.example.p03.dto.OrderDetailsResponseDTO;
import com.example.p03.exception.ExcepcionRecursoNoEncontrado;
import com.example.p03.model.OrderDetails;
// import com.example.p03.model.OrderDetails;
import com.example.p03.service.OrderDetailService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import jakarta.validation.Valid;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
@RequestMapping({"/orderDetail"})
public class OrderDetailController {
    private final OrderDetailService OrderDetailService;

    public OrderDetailController(OrderDetailService OrderDetailService){
        this.OrderDetailService = OrderDetailService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<OrderDetailsResponseDTO>> getOrderDetails() {
        return ResponseEntity.ok(OrderDetailService.getOrderDetailsDTO());

    }

    @GetMapping("/all2")
    public ResponseEntity<List<OrderDetails>> getOrderDetails2() {
        return ResponseEntity.ok(OrderDetailService.getOrderDetails());

    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public OrderDetailsResponseDTO saveOrderDetails(@Valid @RequestBody CreateOrderDetailDTO createOrderDetailDTO) throws ExcepcionRecursoNoEncontrado {
        return OrderDetailService.saveOrderDetails(createOrderDetailDTO);
    }
    
    @PostMapping("/save2")
    @ResponseStatus(HttpStatus.CREATED)
    public OrderDetails saveOrderDetails2(@Valid @RequestBody OrderDetails data){
        return OrderDetailService.saveOrderDetails2(data);
    }
    
}
