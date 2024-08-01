package com.example.p03.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.p03.dto.CreateOrderDetailDTO;
import com.example.p03.dto.OrderDetailDTO;
import com.example.p03.mapper.OrderDetailMapper;
import com.example.p03.model.OrderDetails;
import com.example.p03.repository.OrderDetailRepository;

@Service
public class OrderDetailService {
    private final OrderDetailRepository orderDetailRepository;
   // private final OrderDetailMapper orderDetailMapper;

    public OrderDetailService(OrderDetailRepository orderDetailRepository, OrderDetailMapper orderDetailMapper) {
        this.orderDetailRepository =orderDetailRepository;
        //this.orderDetailMapper = orderDetailMapper;
    }
    public List<OrderDetails> getOrderDetails(){
        return orderDetailRepository.findAll();
    }

    //public OrderDetailDTO save(CreateOrderDetailDTO data) {
    //    OrderDetails model = orderDetailMapper.toModel(data);
    //    OrderDetails result = orderDetailRepository.save(model);
    //    return orderDetailMapper.toDTO(result);
    //}
    
}
