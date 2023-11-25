package com.aterrissar.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aterrissar.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
