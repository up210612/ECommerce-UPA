package com.example.p03.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
// import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.p03.model.Product;
import com.example.p03.service.ProductService;

import jakarta.validation.Valid;

import java.util.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.p03.exception.ExcepcionRecursoNoEncontrado;


@RestController
@RequestMapping({"/products"})
public class ProductController {
    private final ProductService productService;

    public ProductController(@Autowired ProductService productService) {
        this.productService = productService;
    }

    @GetMapping({ "/all" })
    public ResponseEntity<List<Product>> getProducts() {
        return ResponseEntity.ok(productService.getProducts());
    }

    @GetMapping({ "/{id}" })
    public Product getProduct(@PathVariable Long id) throws ExcepcionRecursoNoEncontrado{
        return productService.getProduct(id);
    }
    

    @PostMapping("/addProduct")
    @ResponseStatus(HttpStatus.CREATED)
    public Product addProduct(@Valid @RequestBody Product product) {
        return productService.saveProduct(product);
    }

    @PutMapping("/editProduct/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateProduct(@PathVariable long id, @Valid @RequestBody Product product) throws ExcepcionRecursoNoEncontrado{
        productService.updateProduct(id, product);
    }

    @DeleteMapping("/deleteProduct/{id}") 
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProduct(@PathVariable Long id) {
        if (id > 0) {
            productService.deleteProduct(id);
        } 
    }

    @GetMapping({ "/searchByName/" })
    public ResponseEntity<List<Product>> searchProducts(@RequestParam String name) {
        return ResponseEntity.ok(productService.searchProductByName(name));
    }

}
