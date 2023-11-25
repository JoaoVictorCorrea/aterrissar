package com.aterrissar.entities;

import java.math.BigDecimal;
import java.util.Date;
import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Voo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Date dataSaida;
	private Date dataChegada;
	private BigDecimal precoPassagem;
	private int qtdAssentosEconomica;
	private int qtdAssentosPrimeiraClasse;
	private int qtdAssentosExecutiva;
	private String imgUrl;
	
	@ManyToOne
	private Empresa empresa;
	
	@ManyToOne
	private Aeroporto destino;
	
	@ManyToOne
	private Aeroporto partida;
	
	public Voo() {}

	public Voo(Long id, Date dataSaida, Date dataChegada, BigDecimal precoPassagem, int qtdAssentosEconomica,
			int qtdAssentosPrimeiraClasse, int qtdAssentosExecutiva, Empresa empresa, Aeroporto destino,
			Aeroporto partida, String imgUrl) {
		this.id = id;
		this.dataSaida = dataSaida;
		this.dataChegada = dataChegada;
		this.precoPassagem = precoPassagem;
		this.qtdAssentosEconomica = qtdAssentosEconomica;
		this.qtdAssentosPrimeiraClasse = qtdAssentosPrimeiraClasse;
		this.qtdAssentosExecutiva = qtdAssentosExecutiva;
		this.empresa = empresa;
		this.destino = destino;
		this.partida = partida;
		this.imgUrl = imgUrl;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getDataSaida() {
		return dataSaida;
	}

	public void setDataSaida(Date dataSaida) {
		this.dataSaida = dataSaida;
	}

	public Date getDataChegada() {
		return dataChegada;
	}

	public void setDataChegada(Date dataChegada) {
		this.dataChegada = dataChegada;
	}

	public BigDecimal getPrecoPassagem() {
		return precoPassagem;
	}

	public void setPrecoPassagem(BigDecimal precoPassagem) {
		this.precoPassagem = precoPassagem;
	}

	public int getQtdAssentosEconomica() {
		return qtdAssentosEconomica;
	}

	public void setQtdAssentosEconomica(int qtdAssentosEconomica) {
		this.qtdAssentosEconomica = qtdAssentosEconomica;
	}

	public int getQtdAssentosPrimeiraClasse() {
		return qtdAssentosPrimeiraClasse;
	}

	public void setQtdAssentosPrimeiraClasse(int qtdAssentosPrimeiraClasse) {
		this.qtdAssentosPrimeiraClasse = qtdAssentosPrimeiraClasse;
	}

	public int getQtdAssentosExecutiva() {
		return qtdAssentosExecutiva;
	}

	public void setQtdAssentosExecutiva(int qtdAssentosExecutiva) {
		this.qtdAssentosExecutiva = qtdAssentosExecutiva;
	}

	public Empresa getEmpresa() {
		return empresa;
	}

	public void setEmpresa(Empresa empresa) {
		this.empresa = empresa;
	}

	public Aeroporto getDestino() {
		return destino;
	}

	public void setDestino(Aeroporto destino) {
		this.destino = destino;
	}

	public Aeroporto getPartida() {
		return partida;
	}

	public void setPartida(Aeroporto partida) {
		this.partida = partida;
	}
	
	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
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
		Voo other = (Voo) obj;
		return Objects.equals(id, other.id);
	}
}
