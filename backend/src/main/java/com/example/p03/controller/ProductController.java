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

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

import java.util.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.p03.dto.ProductAllInfoDTO;
import com.example.p03.dto.ProductsInfoHomeDTO;
import com.example.p03.exception.ExcepcionRecursoNoEncontrado;

@Tag(name = "Endpoints de productos", description = "CRUD de productos")
@RestController
@RequestMapping({"/products"})
public class ProductController {
    private final ProductService productService;

    public ProductController(@Autowired ProductService productService) {
        this.productService = productService;
    }

    @Operation(summary = "Te trae todos los productos")
    @GetMapping({ "/all" })
    public ResponseEntity<List<Product>> getProducts() {
        return ResponseEntity.ok(productService.getProducts());
    }

    @Operation(summary = "Te trae todos los productos con la ruta de la imágen principal")
    @GetMapping({ "/getProductsHome" })
    public ResponseEntity<List<ProductsInfoHomeDTO>> getProductsHome() {
        return ResponseEntity.ok(productService.getProductsHome());
    }

    @Operation(summary = "Te trae todos los productos con la ruta de las imágenes")
    @GetMapping({ "/getAllInfoProducts" })
    public ResponseEntity<List<ProductAllInfoDTO>> getAllInfoProducts() {
        return ResponseEntity.ok(productService.getAllInfoProducts());
    }

    @Operation(summary = "Te trae un producto con la ruta de las imágenes")
    @GetMapping({ "/getAllInfoProduct/{id}" })
    public ResponseEntity<ProductAllInfoDTO> getAllInfoProductsById(@PathVariable Long id) throws ExcepcionRecursoNoEncontrado{
        return ResponseEntity.ok(productService.getAllInfoProductById(id));
    }

    @Operation(summary = "Te trae un producto por id")
    @GetMapping({ "/{id}" })
    public Product getProduct(@PathVariable Long id) throws ExcepcionRecursoNoEncontrado{
        return productService.getProduct(id);
    }
    
    @Operation(summary = "Crear producto")
    @PostMapping("/addProduct")
    @ResponseStatus(HttpStatus.CREATED)
    public Product addProduct(@Valid @RequestBody Product product) {
        return productService.saveProduct(product);
    }

    @Operation(summary = "Editar producto")
    @PutMapping("/editProduct/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateProduct(@PathVariable long id, @Valid @RequestBody Product product) throws ExcepcionRecursoNoEncontrado{
        productService.updateProduct(id, product);
    }   


    @Operation(summary = "Eliminar producto")
    @DeleteMapping("/deleteProduct/{id}") 
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProduct(@PathVariable Long id) {
        if (id > 0) {
            productService.deleteProduct(id);
        } 
    }

    @Operation(summary = "Búsqueda por nombre")
    @GetMapping({ "/searchByName/" })
    public ResponseEntity<List<Product>> searchProducts(@RequestParam String name) {
        return ResponseEntity.ok(productService.searchProductByName(name));
    }

}
