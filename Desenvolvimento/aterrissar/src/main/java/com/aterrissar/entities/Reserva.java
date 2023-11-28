package com.aterrissar.entities;

import java.math.BigDecimal;
import java.util.List;
import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Reserva {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private BigDecimal total;
	
	@ManyToOne
	private Voo viagem;
	
	@ManyToOne
	private User user;
	
	/*
	@ManyToOne
	private List<Passagem> passagens;*/
	
	public Reserva() {}

	public Reserva(Long id, BigDecimal total, Voo viagem, User user, List<Passagem> passagens) {
		this.id = id;
		this.total = total;
		this.viagem = viagem;
		this.user = user;
		//this.passagens = passagens;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public BigDecimal getTotal() {
		return total;
	}

	public void setTotal(BigDecimal total) {
		this.total = total;
	}

	public Voo getViagem() {
		return viagem;
	}

	public void setViagem(Voo viagem) {
		this.viagem = viagem;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	/*
	public List<Passagem> getPassagens() {
		return passagens;
	}

	public void setPassagens(List<Passagem> passagens) {
		this.passagens = passagens;
	}
	 */
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Reserva other = (Reserva) obj;
		return Objects.equals(id, other.id);
	}
}
