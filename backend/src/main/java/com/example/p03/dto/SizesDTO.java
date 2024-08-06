package com.example.p03.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Schema(description = "Modelo para las tallas de un producto")
@Data
public class SizesDTO {
    private String sizeName;
    private long quantity;
}
