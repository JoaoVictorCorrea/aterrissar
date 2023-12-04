package com.aterrissar.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
	public ResponseEntity<?> findAll(){
		
		return ResponseEntity.ok(empresaService.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> findById(@PathVariable Long id){
		
		Empresa empresa = empresaService.findById(id).get();
		
		return(empresa != null ? ResponseEntity.ok(empresa) 
				: ResponseEntity.badRequest().body("Empresa não encontrada!"));
	}
	
	@PostMapping
	public ResponseEntity<?> save(@RequestBody Empresa empresa) {
		
		return ResponseEntity.ok(empresaService.save(empresa));
	}
}
