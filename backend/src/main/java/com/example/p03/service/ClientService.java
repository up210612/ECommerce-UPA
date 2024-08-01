package com.example.p03.service;


import org.springframework.stereotype.Service;

import com.example.p03.dto.ClientDTO;
import com.example.p03.dto.CreateClientDTO;
import com.example.p03.model.Client;
import com.example.p03.mapper.ClientMapper;
import com.example.p03.repository.ClientRepository;

// import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

import com.example.p03.exception.ExcepcionRecursoNoEncontrado;

import java.util.*;

@Service
public class ClientService {
    private final ClientRepository ClientRepository;
    private final ClientMapper ClientMapper;

    public ClientService(ClientRepository ClientRepository, ClientMapper ClientMapper) {
        this.ClientRepository = ClientRepository;
        this.ClientMapper = ClientMapper;
    }

    public List<Client> getClients() {
        return ClientRepository.findAll();
    }

    public Client getClient(Long id) throws ExcepcionRecursoNoEncontrado {
        Optional<Client> optionalClient = ClientRepository.findById(id);
        if(optionalClient.isPresent() == false){
            throw new ExcepcionRecursoNoEncontrado("The product was not found: " + id);
        }
        return optionalClient.get();
    }

    public Client saveClient(@Valid Client product) {
        Client result = ClientRepository.save(product);
        return result;
    }

    public ClientDTO save (CreateClientDTO data){

        Client model = ClientMapper.toModel(data);
        Client result = ClientRepository.save(model);
        return ClientMapper.toDTO(result);
    }

    public void updateClient(long id, Client newData) throws ExcepcionRecursoNoEncontrado{
        Optional<Client> optionalClient = ClientRepository.findById(id);

        if(optionalClient.isPresent() == false){
            throw new ExcepcionRecursoNoEncontrado("The Client was not found: " + id);
        }
        Client updatedClient = optionalClient.get();
        updatedClient.setFirstName(newData.getFirstName());
        updatedClient.setLastName(newData.getLastName());
        updatedClient.setCelular(newData.getCelular());
        updatedClient.setEmail(newData.getEmail());
        updatedClient.setPassword(newData.getPassword());
        ClientRepository.save(updatedClient);
    }

    
}
