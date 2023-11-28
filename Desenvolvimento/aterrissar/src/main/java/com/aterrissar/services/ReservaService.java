package com.aterrissar.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aterrissar.entities.Reserva;
import com.aterrissar.repositories.ReservaRepository;

@Service
public class ReservaService {
	
	@Autowired
	private ReservaRepository reservaRepository;
	
	public List<Reserva> findAll(){
		
		return reservaRepository.findAll();
	}
	
	@Transactional
	public Reserva save(Reserva reserva) {
		
		return reservaRepository.save(reserva);
	}
}
