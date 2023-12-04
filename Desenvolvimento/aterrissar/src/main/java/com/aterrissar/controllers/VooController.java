package com.aterrissar.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aterrissar.entities.Voo;
import com.aterrissar.services.VooService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/voo")
public class VooController {
	
	@Autowired
	private VooService vooService;
	
	@GetMapping
	public ResponseEntity<?> findAll(){
		
		return ResponseEntity.ok(vooService.findAll());
	}
	
	@PostMapping
	public ResponseEntity<?> save(@RequestBody Voo voo) {
		
		return ResponseEntity.ok(vooService.save(voo));
	}
}
