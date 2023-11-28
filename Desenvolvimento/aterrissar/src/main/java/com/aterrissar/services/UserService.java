package com.aterrissar.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aterrissar.entities.User;
import com.aterrissar.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	public List<User> findAll(){
		
		return userRepository.findAll();
	}
	
	@Transactional
	public User save(User user) {
		
		return userRepository.save(user);
	}
	
	public boolean authenticate(String email, String senha) {
		
		User user = userRepository.authenticate(email, senha);
		
		return(user != null ? true : false);
	}
	
}
