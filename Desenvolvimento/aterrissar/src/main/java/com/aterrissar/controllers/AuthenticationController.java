package com.aterrissar.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aterrissar.dtos.UserAuthenticationDTO;
import com.aterrissar.entities.User;
import com.aterrissar.services.UserService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/auth")
public class AuthenticationController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody UserAuthenticationDTO login) {
		
		User userAuthenticated = userService.authenticate(login.getEmail(), login.getSenha());
		
		if(userAuthenticated != null)
			return ResponseEntity.ok(userAuthenticated);
		
		return ResponseEntity.badRequest().body("Acesso Negado!");
	}
}
