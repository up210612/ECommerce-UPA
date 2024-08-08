package com.example.p03.service;

import org.springframework.stereotype.Service;

import com.example.p03.model.Inventory;
import com.example.p03.repository.InventoryRepository;
import java.util.List;

@Service
public class InventoryService {
    private final InventoryRepository inventoryRepository;

    public InventoryService(InventoryRepository inventoryRepository){
        this.inventoryRepository = inventoryRepository;
    }

    public List<Inventory> getAll(){
        return inventoryRepository.findAll();
    }

    public Inventory getbyIdSize(Long id, String name){
        return inventoryRepository.InventoryByIdSize(id,  name);
    }

    public Inventory saveInventory(Inventory data){
       return inventoryRepository.save(data);
    }
}
