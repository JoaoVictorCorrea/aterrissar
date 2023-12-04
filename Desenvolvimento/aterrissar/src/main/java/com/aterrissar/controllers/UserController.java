package com.aterrissar.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aterrissar.entities.User;
import com.aterrissar.services.UserService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping
	public ResponseEntity<?> findAll(){
		
		return ResponseEntity.ok(userService.findAll());
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> save(@RequestBody User user) {
		
		User newUser =  userService.save(user);
		
		return(newUser != null ? ResponseEntity.ok().body("Cadastrado com Sucesso!") 
				: ResponseEntity.badRequest().body("Erro ao Cadastrar!"));
	}
}
