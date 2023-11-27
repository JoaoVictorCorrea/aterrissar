package com.aterrissar.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aterrissar.entities.Reserva;
import com.aterrissar.services.ReservaService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/reserva")
public class ReservaController {
	
	@Autowired
	private ReservaService reservaService;
	
	@GetMapping
	public List<Reserva> findAll(){
		
		return reservaService.findAll();
	}
	
	@PostMapping
	public Reserva save(@RequestBody Reserva reserva) {
		
		return reservaService.save(reserva);
	}
}
