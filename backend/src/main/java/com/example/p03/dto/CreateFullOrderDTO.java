package com.example.p03.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import java.util.List;;

@Schema(description = "Modelo para crear una ordén completa")
@Data
public class CreateFullOrderDTO {
    private Long idClient;

    private CreateShippingAddressDTO address;

    private List<ItemDTO> items;

    private Double totalAmount;

}
