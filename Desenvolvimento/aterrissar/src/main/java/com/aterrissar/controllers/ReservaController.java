package com.aterrissar.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aterrissar.entities.Reserva;
import com.aterrissar.entities.User;
import com.aterrissar.services.ReservaService;
import com.aterrissar.services.UserService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/reserva")
public class ReservaController {
	
	@Autowired
	private ReservaService reservaService;
	
	@Autowired
	private UserService userService;
	
	@GetMapping
	public List<Reserva> findAll(){
		
		return reservaService.findAll();
	}
	
	@PostMapping
	public ResponseEntity<?> save(@RequestBody Reserva reserva) {
		
		return ResponseEntity.ok(reservaService.save(reserva));
	}
	
	@GetMapping("/user/{id}")
	public ResponseEntity<?> findByUser(@PathVariable Long id){
		
		Optional<User> user = userService.findById(id);
		
		if(user.isEmpty())
			return ResponseEntity.badRequest().body("Usuário Inexistente!");

		return ResponseEntity.ok(reservaService.findByUser(user.get()));
	}
}
