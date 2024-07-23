package com.example.p03.repository;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;
// import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.p03.model.ShippingAddress;
// import java.util.*;


@Repository
public interface ShippingAddressRepository extends JpaRepository<ShippingAddress,Long> {
    
}
