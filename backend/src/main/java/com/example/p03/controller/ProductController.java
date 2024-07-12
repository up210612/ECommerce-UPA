package com.example.p03.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.p03.model.Product;
import com.example.p03.service.ProductService;

import jakarta.validation.Valid;

import java.util.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
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
    public ResponseEntity<Optional<Product>> getProduct(@PathVariable Long id) {
        return ResponseEntity.ok(productService.getProduct(id));
    }

    @GetMapping("/eliminarProducto/{id}") 
    public ResponseEntity<String> eliminar(@PathVariable Long id) {
        if (id > 0) {
            productService.eliminar(id);
        }
        return ResponseEntity.ok("Product deleted successfully"); 
    }

    @PostMapping("/agregarProducto")
    public ResponseEntity<String> addProduct(@Valid Product product, BindingResult br) {
        if (br.hasErrors()) {
            return ResponseEntity.ok("Data received unsuccessfully");
        }
        productService.guardar(product);

        return ResponseEntity.ok("Data received successfully");
    }

    @PostMapping("/editarProducto")
    public ResponseEntity<String> editProduct(@Valid Product product, BindingResult br) {
        if (br.hasErrors()) {
            return ResponseEntity.ok("Data received unsuccessfully");
        }
        productService.guardar(product);

        return ResponseEntity.ok("Data received successfully");
    }

}
