package com.example.p03.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;
import java.util.Date;


@Data
public class CreateOrderDTO {

    private Long idClient;

    private Long  idAddress;

    @JsonFormat(pattern = "yyyy-MM-dd") 
    private Date orderDate;

    private double totalAmount;
}
