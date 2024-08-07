package com.example.p03.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import com.example.p03.dto.SizesDTO;
import lombok.Data;

import java.util.List;


@Schema(description = "Modelo para obtener toda la información del producto incluyendo todas las imágenes")
@Data 
public class ProductAllInfoDTO {
    private long idProduct;
    private String productName;
    private long unitPrice;
    private long idCategory;
    private String categoryName;
    private List<String> productImages;
    private List<SizesDTO> sizes;
}
