package com.example.p03.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Schema(description = "modelo para crear detalles de ordenes")
@Data
public class CreateOrderDetailDTO {

    private Long idOrder;
    private Long idProduct;
    private Double unitPrice;
    private Integer quantity;
    private Double discount;
}
