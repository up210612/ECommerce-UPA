package com.example.p03.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.p03.model.OrderDetails;
import com.example.p03.model.OrderDetailsId;

@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetails, OrderDetailsId> {
    
}
