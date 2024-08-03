package com.example.p03.dto;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;

@Schema(description = "Modelo para crear Product Info Home")
@Data 
public class ProductsInfoHomeDTO {
    private long idProduct;

    private String productName;

    private long unitPrice;

    private String productImageRoute;
    
}
