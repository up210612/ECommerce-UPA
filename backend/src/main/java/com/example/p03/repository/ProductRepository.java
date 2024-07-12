package com.example.p03.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.p03.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{
    
}
