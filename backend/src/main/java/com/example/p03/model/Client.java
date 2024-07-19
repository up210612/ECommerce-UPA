package com.example.p03.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;


@Data
@Entity
@Table(name = "clients")
public class Client {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id_client")
  private Long idClient;

  @NotBlank(message = "No puede estar vacio")
  private String lastName;

  private String firstName;
  
  private String celular;
    
}


