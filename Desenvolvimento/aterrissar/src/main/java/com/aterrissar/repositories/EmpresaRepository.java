package com.aterrissar.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aterrissar.entities.Empresa;

public interface EmpresaRepository extends JpaRepository<Empresa, Long> {

}
