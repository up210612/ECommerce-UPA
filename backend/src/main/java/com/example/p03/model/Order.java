package com.example.p03.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonFormat;

@Data
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_order")
    private long idOrder;

    private String idClient;

    private String idAddress;

    
    @JsonFormat(pattern = "yyyy-MM-dd") 
    private LocalDate orderDate;

    @PrePersist
    public void PrePersist() {
        orderDate = LocalDate.now();
    }

    private Double totalAmount;

    @OneToMany(mappedBy = "order")
    private Set<OrderDetails> orderDetails;
}
