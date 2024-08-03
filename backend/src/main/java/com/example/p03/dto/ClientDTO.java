package com.example.p03.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Schema(description = "Modelo para crear Clients")
@Data
public class ClientDTO {
     
  private Long idClient;

  private String lastName;

  private String firstName;

  private String celular;

  private String email;

  private String password;
}
