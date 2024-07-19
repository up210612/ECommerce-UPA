package com.example.p03.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.p03.model.Client;


public interface ClientRepository extends JpaRepository<Client, Long>{
    
}