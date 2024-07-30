package com.example.p03.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "productimages")
public class ProductImages {
    @Id
    @Column(name = "id_product_image")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProductImage;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idProduct")
    private long idProduct;

    private String productImageRoute;
}
