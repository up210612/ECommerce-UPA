package com.example.p03.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Schema(description = "Modelo para crear clients")
@Data
public class CreateClientDTO {
    
    private String last_name;

    private String first_name;

    private String celular;

    private String email;

    private String password;
}
