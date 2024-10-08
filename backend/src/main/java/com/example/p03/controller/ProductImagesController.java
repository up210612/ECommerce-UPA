package com.example.p03.controller;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
// import org.springframework.validation.BindingResult;
// import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;

import com.example.p03.model.ProductImages;
import com.example.p03.service.ProductImagesService;

// import jakarta.validation.Valid;

import java.util.*;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

// import com.example.p03.exception.ExcepcionRecursoNoEncontrado;


@RestController
@RequestMapping({"/images"})
public class ProductImagesController {
    private final ProductImagesService productImagesService;

    public ProductImagesController(@Autowired ProductImagesService productImagesService) {
        this.productImagesService = productImagesService;
    }

    @GetMapping({ "/all" })
    public ResponseEntity<List<ProductImages>> getImages() {
        return ResponseEntity.ok(productImagesService.getImages());
    }

}
