package com.aterrissar.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
	public List<Voo> findAll(){
		
		return vooService.findAll();
	}
	
	@PostMapping
	public Voo save(@RequestBody Voo voo) {
		
		return vooService.save(voo);
	}
}
