package com.example.p03.service;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.p03.model.ProductImages;
import com.example.p03.repository.ProductImagesRepository;

// import jakarta.transaction.Transactional;
// import jakarta.validation.Valid;

// import com.example.p03.exception.ExcepcionRecursoNoEncontrado;

import java.util.*;

@Service
public class ProductImagesService {
    private final ProductImagesRepository productImagesRepository;

    public ProductImagesService(ProductImagesRepository productImagesRepository) {
        this.productImagesRepository = productImagesRepository;
    }

    public List<ProductImages> getImages() {
        return productImagesRepository.findAll();
    }
    
}
