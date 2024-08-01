package com.example.p03.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "orderdetails")
public class OrderDetails {

    @Id
    @OneToMany
    @JoinColumn(name = "id_order")
    private Order order;

    @Id
    @ManyToOne
    @JoinColumn(name = "id_product")
    private Product product;

    private Double unitPrice;
    private Integer quantity;
    private Double discount;
}
