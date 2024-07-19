package com.example.p03.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.p03.model.Client;
import com.example.p03.repository.ClientRepository;

import java.util.*;

@Service
public class ClienteService {
    private final ClientRepository ClientRepository;

    @Autowired
    public ClienteService(ClientRepository ClientRepository){
        this.ClientRepository = ClientRepository;
    }

    public List<Client> getClients() {
        return ClientRepository.findAll();
    }

    

    
}
