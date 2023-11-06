package com.aterrissar.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aterrissar.entities.Empresa;
import com.aterrissar.repositories.EmpresaRepository;

@Service
public class EmpresaService {
	
	@Autowired
	private EmpresaRepository empresaRepository;
	
	public List<Empresa> findAll(){
		
		return empresaRepository.findAll();
	}
}
