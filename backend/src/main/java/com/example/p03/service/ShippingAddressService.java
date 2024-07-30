package com.example.p03.service;

import org.springframework.stereotype.Service;

import com.example.p03.dto.CreateShippingAddressDTO;
import com.example.p03.dto.ShippingAddressDTO;
import com.example.p03.model.ShippingAddress;
import com.example.p03.mapper.ShippingAddressMapper;
import com.example.p03.repository.ShippingAddressRepository;
import java.util.*;

@Service
public class ShippingAddressService {
    private final ShippingAddressRepository shippingAddressRepository;
    private final ShippingAddressMapper shippingAddressMapper;

    public ShippingAddressService(ShippingAddressRepository shippingAddressRepository, ShippingAddressMapper shippingAddressMapper){

        this.shippingAddressRepository = shippingAddressRepository;
        this.shippingAddressMapper = shippingAddressMapper;
    }

    public List<ShippingAddress> getAddresses(){
        return shippingAddressRepository.findAll();
    }

    public ShippingAddressDTO save(CreateShippingAddressDTO data){
        ShippingAddress model = shippingAddressMapper.toModel(data);
        ShippingAddress result = shippingAddressRepository.save(model);
        return shippingAddressMapper.toDTO(result);
    }

}
