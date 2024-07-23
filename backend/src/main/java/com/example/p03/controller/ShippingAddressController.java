package com.example.p03.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.p03.dto.CreateShippingAddressDTO;
import com.example.p03.dto.ShippingAddressDTO;
import com.example.p03.model.Product;
import com.example.p03.model.ShippingAddress;
import com.example.p03.service.ShippingAddressService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.*;

@RestController
@RequestMapping({"/shippingaddress"})
public class ShippingAddressController {
    private final ShippingAddressService shippingAddressService;

    public ShippingAddressController(@Autowired  ShippingAddressService shippingAddressService){
        this.shippingAddressService = shippingAddressService;
    }

    @GetMapping({"all"})
    public List<ShippingAddress> getAddresses(){
        return shippingAddressService.getAddresses();
    }

    @PostMapping("/saveAddress")
    @ResponseStatus(HttpStatus.CREATED)
    public ShippingAddressDTO saveAddress(@Valid @RequestBody CreateShippingAddressDTO data) {
        return shippingAddressService.save(data);
    }
    
}
