package com.example.p03.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.p03.model.Client;
import com.example.p03.service.ClienteService;

import jakarta.validation.Valid;

import java.util.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.p03.exception.ExcepcionRecursoNoEncontrado;


@RestController
@RequestMapping({"/clients"})
public class ClientController {
    private final ClienteService ClienteService;

    public ClientController(@Autowired ClienteService ClientService) {
        this.ClienteService = ClientService;
    }

    @GetMapping({ "/all" })
    public ResponseEntity<List<Client>> getClients() {
        return ResponseEntity.ok(ClienteService.getClients());
    }

   
}
