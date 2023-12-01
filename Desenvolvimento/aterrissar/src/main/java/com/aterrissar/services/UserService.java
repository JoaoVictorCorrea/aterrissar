package com.aterrissar.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
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
	
	public Optional<User> findById(Long id){
		
		return userRepository.findById(id);
	}
	
	@Transactional
	public User save(User user) {
		
		if(this.userRepository.findByEmail(user.getEmail()) != null)
			return null;
		
		//encriptografando senha
		String encryptedPassword = new BCryptPasswordEncoder().encode(user.getSenha());
		
		user.setSenha(encryptedPassword);
		
		return userRepository.save(user);
	}
	
	public User authenticate(String email, String senha) {
		
		User user = userRepository.findByEmail(email);
		PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		
		//Realiza o mathc das senhas
		boolean match = passwordEncoder.matches(senha, user.getSenha());
		
		return(match ? user : null);
	}
	
}
