package com.aterrissar.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.aterrissar.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByEmail(String email);
	
	@Query("SELECT u FROM User u WHERE u.email = :email AND u.senha = :senha")
	User authenticate(String email, String senha);
}
