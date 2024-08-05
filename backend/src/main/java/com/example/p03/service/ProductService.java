package com.example.p03.service;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.p03.model.Product;
import com.example.p03.repository.ProductRepository;

// import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

import com.example.p03.dto.ProductAllInfoDTO;
import com.example.p03.dto.ProductsInfoHomeDTO;
import com.example.p03.exception.ExcepcionRecursoNoEncontrado;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class ProductService {
    private final ProductRepository ProductRepository;

    public ProductService(ProductRepository ProductRepository) {
        this.ProductRepository = ProductRepository;
    }

    public List<Product> getProducts() {
        return ProductRepository.findAll();
    }

    public List<ProductsInfoHomeDTO> getProductsHome() {
        List<Object[]> products = ProductRepository.ProductsInfoHome();
        return products.stream()
                .map(this::mapToProductsInfoHomeDTO)
                .collect(Collectors.toList());
    }

    private ProductsInfoHomeDTO mapToProductsInfoHomeDTO(Object[] product) {
        ProductsInfoHomeDTO dto = new ProductsInfoHomeDTO();
        dto.setIdProduct(((Number) product[0]).longValue());
        dto.setProductName((String) product[1]);
        dto.setUnitPrice(((Number) product[2]).longValue());
        dto.setProductImageRoute((String) product[3]);
        return dto;
    }

    
    public List<ProductAllInfoDTO> getAllInfoProducts() {
        List<Object[]> products = ProductRepository.AllInfoProducts();
        
        // Agrupar imágenes por producto
        Map<Long, ProductAllInfoDTO> productMap = new HashMap<>();
        for (Object[] product : products) {
            Long idProduct = ((Number) product[0]).longValue();
            ProductAllInfoDTO dto = productMap.computeIfAbsent(idProduct, k -> {
                ProductAllInfoDTO newDto = new ProductAllInfoDTO();
                newDto.setIdProduct(idProduct);
                newDto.setProductName((String) product[1]);
                newDto.setUnitPrice(((Number) product[2]).longValue());
                newDto.setProductImages(new ArrayList<>());
                return newDto;
            });
            dto.getProductImages().add((String) product[3]);
        }

        return new ArrayList<>(productMap.values());
    }

    public ProductAllInfoDTO getAllInfoProductById(Long id) throws ExcepcionRecursoNoEncontrado {
        List<Object[]> products = ProductRepository.AllInfoProductById(id);
        if (products.isEmpty()) {
            throw new ExcepcionRecursoNoEncontrado("The product was not found: " + id);
        }
        
        ProductAllInfoDTO dto = new ProductAllInfoDTO();
        dto.setIdProduct(((Number) products.get(0)[0]).longValue());
        dto.setProductName((String) products.get(0)[1]);
        dto.setUnitPrice(((Number) products.get(0)[2]).longValue());
        dto.setIdCategory(((Number) products.get(0)[3]).longValue());
        dto.setCategoryName((String) products.get(0)[4]);
        dto.setProductImages(products.stream().map(product -> (String) product[5]).collect(Collectors.toList()));
        
        return dto;
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
