package com.aterrissar.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aterrissar.entities.Empresa;
import com.aterrissar.repositories.EmpresaRepository;

@Service
public class EmpresaService {
	
	@Autowired
	private EmpresaRepository empresaRepository;
	
	public List<Empresa> findAll(){
		
		return empresaRepository.findAll();
	}
	
	public Optional<Empresa> findById(Long id){
		
		return empresaRepository.findById(id);
	}

	@Transactional
	public Empresa save(Empresa empresa) {
		
		return empresaRepository.save(empresa);
	}
}
