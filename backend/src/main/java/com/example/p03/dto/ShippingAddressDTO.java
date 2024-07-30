package com.example.p03.dto;

import lombok.Data;

@Data
public class ShippingAddressDTO {
    private long idAddress;

    private String street;

    private String streetNumber;

    private String apartment;

    private String country;

    private String countryState;

    private String zipcode;
}
