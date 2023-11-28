package com.aterrissar.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aterrissar.entities.Aeroporto;
import com.aterrissar.repositories.AeroportoRepository;

@Service
public class AeroportoService {
	
	@Autowired
	private AeroportoRepository aeroportoRepository;
	
	public List<Aeroporto> findAll(){
		
		return aeroportoRepository.findAll();
	}
	
	public Optional<Aeroporto> findById(Long id){
		
		return aeroportoRepository.findById(id);
	}

	@Transactional
	public Aeroporto save(Aeroporto aeroporto) {
		
		return aeroportoRepository.save(aeroporto);
	}
}
