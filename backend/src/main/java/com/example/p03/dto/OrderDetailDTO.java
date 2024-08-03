package com.example.p03.dto;

import lombok.Data;

@Data
public class OrderDetailDTO {

    private String idOrder;

    private String idProduct;

    private Double unitPrice;
    private Integer quantity;
    private Double discount; 
    
}
