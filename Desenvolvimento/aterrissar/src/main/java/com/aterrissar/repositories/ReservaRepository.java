package com.aterrissar.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aterrissar.entities.Reserva;

public interface ReservaRepository extends JpaRepository<Reserva, Long> {

}
