package com.example.p03.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import com.example.p03.model.Inventory;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory,Long>{
    @Query(value = "select * from inventory where id_product = :id and size like :size", nativeQuery = true)
    Inventory InventoryByIdSize(@Param("id") Long id,@Param("size") String size);
}
