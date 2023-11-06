package com.aterrissar.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aterrissar.entities.Voo;
import com.aterrissar.repositories.VooRepository;

@Service
public class VooService {
	
	@Autowired
	private VooRepository vooRepository;
	
	public List<Voo> findAll(){
		
		return vooRepository.findAll();
	}
	
	@Transactional
	public Voo save(Voo voo) {
		
		return vooRepository.save(voo);
	}
}
