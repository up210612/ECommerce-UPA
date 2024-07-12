package com.example.p03.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;
import java.time.LocalDate;
import java.util.*;

@Data
@Entity
@Table(name = "clients")
public class Client {
  @Id
  @Column(name = "id_client")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long idClient;

  @NotBlank(message = "No puede estar vacio")
  private String lastName;

  private String firstName;
  

  @NotEmpty(message = "El celular no puede estar vacio.")  
  @Pattern(regexp = "^(\\d{3}[-]?){2}\\d{4}$")
  private String celular;
    
}
