package com.example.p03.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.p03.model.Product;
import com.example.p03.repository.ProductRepository;

import java.util.*;

@Service
public class ProductService {
    private final ProductRepository ProductRepository;

    @Autowired
    public ProductService(ProductRepository ProductRepository) {
        this.ProductRepository = ProductRepository;
    }

    public List<Product> getProducts() {
        return ProductRepository.findAll();
    }

    public Optional<Product> getProduct(Long id) {
        return ProductRepository.findById(id);    }
}
