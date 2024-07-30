package com.example.p03.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Schema(description = "Modelo para crear Product Info Home")
@Data 
public class ProductsInfoHomeDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_product")
    private long idProduct;

    private String productName;

    private long unitPrice;

    public ProductsInfoHomeDTO(long idProduct, String productName, long unitPrice) {
        this.idProduct = idProduct;
        this.productName = productName;
        this.unitPrice = unitPrice;
    }
}
