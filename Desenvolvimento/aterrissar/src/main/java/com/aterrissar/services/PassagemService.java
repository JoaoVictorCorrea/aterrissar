package com.aterrissar.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aterrissar.entities.Passagem;
import com.aterrissar.repositories.PassagemRepository;

@Service
public class PassagemService {
	
	@Autowired
	private PassagemRepository passagemRepository;
	
	@Transactional
	public Passagem save(Passagem passagem) {
		
		return passagemRepository.save(passagem);
	}
}
