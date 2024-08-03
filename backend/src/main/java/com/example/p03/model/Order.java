package com.example.p03.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
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
    private Long idOrder;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "id_client", referencedColumnName = "id_client")
    private Client client;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "id_address", referencedColumnName = "id_address")
    private ShippingAddress address;

    
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
