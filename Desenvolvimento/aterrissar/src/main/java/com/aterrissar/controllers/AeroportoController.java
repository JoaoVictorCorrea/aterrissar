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

import com.aterrissar.entities.Aeroporto;
import com.aterrissar.services.AeroportoService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/aeroporto")
public class AeroportoController {
	
	@Autowired
	private AeroportoService aeroportoService;
	
	@GetMapping
	public ResponseEntity<?> findAll(){
		
		return ResponseEntity.ok(aeroportoService.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> findById(@PathVariable Long id){
		
		Aeroporto aeroporto = aeroportoService.findById(id).get();
		
		return(aeroporto != null ? ResponseEntity.ok(aeroporto) 
				: ResponseEntity.badRequest().body("Aeroporto não encontrado!"));
	}
	
	@PostMapping
	public ResponseEntity<?> save(@RequestBody Aeroporto aeroporto) {
		
		return ResponseEntity.ok(aeroportoService.save(aeroporto));
	}
}
