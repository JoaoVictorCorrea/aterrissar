package com.aterrissar.data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.aterrissar.entities.Aeroporto;
import com.aterrissar.repositories.AeroportoRepository;

@Component
public class DataLoader implements CommandLineRunner {
	
	@Autowired
	private AeroportoRepository aeroportoRepository;
	
	@Override
    @Transactional
    public void run(String... args) throws Exception {
        // Verificar se o banco de dados já contém dados
        if (aeroportoRepository.count() == 0) {
            
            Aeroporto aeroporto1 = new Aeroporto("Aeroporto Internacional de Guarulhos", "GRU", "Rod. Hélio Smidt, s/nº - Aeroporto, Guarulhos - SP, 07190-100", "Brasil", "São Paulo");
            Aeroporto aeroporto2 = new Aeroporto("Aeroporto Santos Dumont", "SDU", "Praça Sen. Salgado Filho, s/n - Centro, Rio de Janeiro - RJ, 20021-340", "Brasil", "Rio de Janeiro");

            aeroportoRepository.save(aeroporto1);
            aeroportoRepository.save(aeroporto2);
        }
    }
}
