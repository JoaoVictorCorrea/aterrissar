package com.aterrissar.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aterrissar.entities.Passagem;

public interface PassagemRepository extends JpaRepository<Passagem, Long> {

}
