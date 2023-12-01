package com.aterrissar.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aterrissar.entities.Passagem;
import com.aterrissar.entities.Reserva;
import com.aterrissar.entities.User;
import com.aterrissar.repositories.ReservaRepository;

@Service
public class ReservaService {
	
	@Autowired
	private ReservaRepository reservaRepository;
	
	@Autowired
	private PassagemService passagemService;
	
	public List<Reserva> findAll(){
		
		return reservaRepository.findAll();
	}
	
	public List<Reserva> findByUser(User user){
		
		return reservaRepository.findByUser(user);
	}
	
	@Transactional
	public Reserva save(Reserva reserva) {
		
		Reserva reservaSaved = reservaRepository.save(reserva);
		
		for(Passagem passagem : reservaSaved.getPassagens()) {
			
			passagem.setReserva(reservaSaved);
			passagem = passagemService.save(passagem);
		}
		
		return reservaSaved;
	}
}
