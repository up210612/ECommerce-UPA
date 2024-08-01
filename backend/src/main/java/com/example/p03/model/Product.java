package com.example.p03.model;

import java.util.Set;


import jakarta.persistence.*;
// import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_product")
    private long idProduct;

    private String productName;

    private long unitPrice;

    private String productDescription;

    private String idCategory;

     @OneToMany(mappedBy = "product")
    private Set<OrderDetails> orderDetails;
}
