package com.example.p03.dto;

import com.example.p03.model.Client;
import com.example.p03.model.ShippingAddress;
import java.util.List;

import lombok.Data;

@Data
public class FullOrderDTO {
    private GetClientDTO client;
    private OrderDTO order;
    private ShippingAddress address;
    private List<OrderDetailsResponseDTO> items;
}
