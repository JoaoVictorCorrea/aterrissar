package com.aterrissar.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aterrissar.entities.Reserva;
import com.aterrissar.entities.User;

public interface ReservaRepository extends JpaRepository<Reserva, Long> {
	
	List<Reserva> findByUser(User user);
}
