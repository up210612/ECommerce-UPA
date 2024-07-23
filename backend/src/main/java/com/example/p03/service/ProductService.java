package com.example.p03.service;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.p03.model.Product;
import com.example.p03.repository.ProductRepository;

// import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

import com.example.p03.exception.ExcepcionRecursoNoEncontrado;

import java.util.*;

@Service
public class ProductService {
    private final ProductRepository ProductRepository;

    public ProductService(ProductRepository ProductRepository) {
        this.ProductRepository = ProductRepository;
    }

    public List<Product> getProducts() {
        return ProductRepository.findAll();
    }

    public Product getProduct(Long id) throws ExcepcionRecursoNoEncontrado {
        Optional<Product> optionalProduct = ProductRepository.findById(id);
        if(optionalProduct.isPresent() == false){
            throw new ExcepcionRecursoNoEncontrado("The product was not found: " + id);
        }
        return optionalProduct.get();
    }

    public Product saveProduct(@Valid Product product) {
        Product result = ProductRepository.save(product);
        return result;
    }

    public void updateProduct(long id, Product newData) throws ExcepcionRecursoNoEncontrado{
        Optional<Product> optionalProduct = ProductRepository.findById(id);

        if(optionalProduct.isPresent() == false){
            throw new ExcepcionRecursoNoEncontrado("The product was not found: " + id);
        }
        Product updatedProduct = optionalProduct.get();
        updatedProduct.setProductName(newData.getProductName());
        updatedProduct.setUnitPrice(newData.getUnitPrice());
        updatedProduct.setProductDescription(newData.getProductDescription());
        updatedProduct.setIdCategory(newData.getIdCategory());
        ProductRepository.save(updatedProduct);
    }

    
    public void deleteProduct(Long id) {
        ProductRepository.deleteById(id);
    }

    public List<Product> searchProductByName(String name){
        return ProductRepository.searchProductsByName("%" + name + "%");
    }
}
