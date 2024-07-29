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

    @Query(value = "SELECT id_product , product_name , unit_price \r\n" + //
            "FROM products;", nativeQuery = true)
    List<ProductsInfoHomeDTO> ProductsInfoHome();

}
