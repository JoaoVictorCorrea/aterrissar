package com.aterrissar.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aterrissar.entities.Empresa;
import com.aterrissar.services.EmpresaService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/empresa")
public class EmpresaController {
	
	@Autowired
	private EmpresaService empresaService;
	
	@GetMapping
	public List<Empresa> findAll(){
		
		return empresaService.findAll();
	}
	
	@GetMapping("/{id}")
	public Optional<Empresa> findById(@PathVariable Long id){
		
		return empresaService.findById(id);
	}
	
	@PostMapping
	public Empresa save(@RequestBody Empresa empresa) {
		
		return empresaService.save(empresa);
	}
}
