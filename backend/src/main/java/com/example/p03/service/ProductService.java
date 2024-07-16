package com.example.p03.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.p03.model.Product;
import com.example.p03.repository.ProductRepository;
import com.example.p03.exception.ExcepcionRecursoNoEncontrado;

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

    public Product getProduct(Long id) throws ExcepcionRecursoNoEncontrado {
        Optional<Product> optionalProduct = ProductRepository.findById(id);
        if(optionalProduct.isPresent() == false){
            throw new ExcepcionRecursoNoEncontrado("The producto was not found: " + id);
        }
        return optionalProduct.get();
    }

    public void guardar(Product product) {
        ProductRepository.save(product);
    }

    public void eliminar(Long id){
        ProductRepository.deleteById(id);
    }
}
