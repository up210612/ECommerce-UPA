package com.example.p03.dto;

import lombok.Data;

@Data
public class GetClientDTO {
    private Long idClient;

    private String lastName;

    private String firstName;

    private String celular;

    private String email;

}
