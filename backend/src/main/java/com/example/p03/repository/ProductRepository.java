package com.example.p03.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.p03.dto.ProductsInfoHomeDTO;
import com.example.p03.model.Product;
import java.util.*;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query(value = "select * from products where product_name like :name", nativeQuery = true)
    List<Product> searchProductsByName(@Param("name") String name);

    @Query("SELECT new com.example.p03.dto.ProductsInfoHomeDTO(p.idProduct, p.productName, p.unitPrice, pi.productImageRoute) " +
           "FROM Product p JOIN ProductImages pi ON p.idProduct = pi.idProduct " +
           "WHERE pi.productImageRoute LIKE '%Principal%'")
    List<ProductsInfoHomeDTO> ProductsInfoHome();

}
