package com.example.p03.dto;

// import com.example.p03.model.ShippingAddress;

// import ch.qos.logback.core.net.server.Client;
import lombok.Data;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

@Data
public class OrderDTO {

    private long idOrder;
    
    private String idClient;

    private String  idAddress;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate orderDate;

    private double totalAmount;
}
