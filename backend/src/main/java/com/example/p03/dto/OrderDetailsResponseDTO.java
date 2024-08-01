package com.example.p03.dto;

import lombok.Data;

@Data
public class OrderDetailsResponseDTO {
    private Long idOrder;
    private Long idProduct;
    private Double unitPrice;
    private Integer quantity;
    private Double discount;
}