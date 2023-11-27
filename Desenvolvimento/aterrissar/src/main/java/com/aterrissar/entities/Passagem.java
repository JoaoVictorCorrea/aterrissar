package com.aterrissar.entities;

import java.math.BigDecimal;
import java.util.Objects;

import com.aterrissar.entities.enums.TipoPassagem;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Passagem {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String assento;
	private Integer qtdBagagem;
	private BigDecimal precoTotal;
	private String nomePassageiro;
	private String cpfPassageiro;
	
	@Column(name = "tipo_passagem")
	@Enumerated(EnumType.STRING)
	private TipoPassagem tipoPassagem;
	
	@ManyToOne
	private Reserva reserva;
	
	public Passagem() {}

	public Passagem(Long id, String assento, Integer qtdBagagem, BigDecimal precoTotal, String nomePassageiro,
			String cpfPassageiro, TipoPassagem tipoPassagem, Reserva reserva) {
		this.id = id;
		this.assento = assento;
		this.qtdBagagem = qtdBagagem;
		this.precoTotal = precoTotal;
		this.nomePassageiro = nomePassageiro;
		this.cpfPassageiro = cpfPassageiro;
		this.tipoPassagem = tipoPassagem;
		this.reserva = reserva;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAssento() {
		return assento;
	}

	public void setAssento(String assento) {
		this.assento = assento;
	}

	public Integer getQtdBagagem() {
		return qtdBagagem;
	}

	public void setQtdBagagem(Integer qtdBagagem) {
		this.qtdBagagem = qtdBagagem;
	}

	public BigDecimal getPrecoTotal() {
		return precoTotal;
	}

	public void setPrecoTotal(BigDecimal precoTotal) {
		this.precoTotal = precoTotal;
	}

	public String getNomePassageiro() {
		return nomePassageiro;
	}

	public void setNomePassageiro(String nomePassageiro) {
		this.nomePassageiro = nomePassageiro;
	}

	public String getCpfPassageiro() {
		return cpfPassageiro;
	}

	public void setCpfPassageiro(String cpfPassageiro) {
		this.cpfPassageiro = cpfPassageiro;
	}

	public TipoPassagem getTipoPassagem() {
		return tipoPassagem;
	}

	public void setTipoPassagem(TipoPassagem tipoPassagem) {
		this.tipoPassagem = tipoPassagem;
	}

	public Reserva getReserva() {
		return reserva;
	}

	public void setReserva(Reserva reserva) {
		this.reserva = reserva;
	}

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
		Passagem other = (Passagem) obj;
		return Objects.equals(id, other.id);
	}
}
