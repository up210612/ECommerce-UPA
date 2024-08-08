package com.example.p03.dto;

import lombok.Data;

@Data
public class ItemDTO {
    private Long idProduct;
    private String size;
    private Double unitPrice;
    private Integer quantity;
}
