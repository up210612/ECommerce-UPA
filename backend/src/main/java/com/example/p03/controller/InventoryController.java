package com.example.p03.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.p03.model.Inventory;
import com.example.p03.model.Product;
import com.example.p03.service.InventoryService;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping({"/inventory"})
public class InventoryController {
    private final InventoryService inventoryService;

    public InventoryController(@Autowired InventoryService inventoryService){
        this.inventoryService = inventoryService;
    }

    @Operation(summary = "Te trae todo el inventario")
    @GetMapping({ "/all" })
    public ResponseEntity<List<Inventory>> getAll() {
        return ResponseEntity.ok(inventoryService.getAll());
    }

    @Operation(summary = "Te trae todo el inventario por id del producto y talla")
    @GetMapping({ "/byIdSize/" })
    public Inventory getAllbyIdSize(@RequestParam String name,@RequestParam Long idProduct) {
        return inventoryService.getbyIdSize(idProduct, name);
    }

    @Operation(summary = "Crear inventario")
    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public Inventory add(@Valid @RequestBody Inventory data) {
        return inventoryService.saveInventory(data);
    }

    @Operation(summary = "Editar inventario")
    @PutMapping("/edit")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public Inventory edit(@Valid @RequestBody Inventory data) {
        return inventoryService.saveInventory(data);
    }
}
