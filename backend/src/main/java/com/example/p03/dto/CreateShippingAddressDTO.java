package com.example.p03.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Schema(description = "Modelo para crear shippingaddress")
@Data
public class CreateShippingAddressDTO {
    
    private String street;

    private String streetNumber;

    private String apartment;

    private String country;

    private String countryState;

    private String zipcode;
}
