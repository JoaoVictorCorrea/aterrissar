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

import com.aterrissar.entities.Aeroporto;
import com.aterrissar.services.AeroportoService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/aeroporto")
public class AeroportoController {
	
	@Autowired
	private AeroportoService aeroportoService;
	
	@GetMapping
	public List<Aeroporto> findAll(){
		
		return aeroportoService.findAll();
	}
	
	@GetMapping("/{id}")
	public Optional<Aeroporto> findById(@PathVariable Long id){
		
		return aeroportoService.findById(id);
	}
	
	@PostMapping
	public Aeroporto save(@RequestBody Aeroporto aeroporto) {
		
		return aeroportoService.save(aeroporto);
	}
}
