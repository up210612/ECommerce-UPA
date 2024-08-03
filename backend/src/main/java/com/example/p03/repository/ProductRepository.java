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

    
    @Query(value = "select p.id_product, p.product_name, p.unit_price, pi.product_image_route from products p join productimages pi on p.id_product = pi.id_product where pi.product_image_route like '%Principal%'", nativeQuery = true)
    List<Object[]> ProductsInfoHome();

    @Query(value = "select p.id_product, p.product_name, p.unit_price, pi.product_image_route from products p join productimages pi on p.id_product = pi.id_product", nativeQuery = true)
    List<Object[]> AllInfoProducts();

    @Query(value = "select p.id_product, p.product_name, p.unit_price, pi.product_image_route from products p join productimages pi on p.id_product = pi.id_product where p.id_product = :id", nativeQuery = true)
    List<Object[]> AllInfoProductById(@Param("id") Long id);
}
