package com.example.p03.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table (name = "shippingaddress")

public class ShippingAddress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_address")
    
    private long idAddress;

    private String street;

    private String streetNumber;

    private String apartment;

    private String country;

    private String countryState;

    private String zipcode;
}
