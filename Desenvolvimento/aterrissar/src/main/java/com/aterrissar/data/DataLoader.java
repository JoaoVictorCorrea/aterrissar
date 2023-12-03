package com.aterrissar.data;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.aterrissar.entities.Aeroporto;
import com.aterrissar.entities.User;
import com.aterrissar.repositories.AeroportoRepository;
import com.aterrissar.repositories.UserRepository;

@Component
public class DataLoader implements CommandLineRunner {
	
	@Autowired
	private AeroportoRepository aeroportoRepository;
	
	@Autowired
	private UserRepository userRepository;
	
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
        
        if(userRepository.count() == 0) {
        	
        	Date date = java.sql.Date.valueOf("1900-01-01");
        	
        	User user = new User("Admin", "0000000000", date , "1112345689", "admin@admin.com", "admin", true);
        	
        	//encriptografando senha
    		String encryptedPassword = new BCryptPasswordEncoder().encode(user.getSenha());
    		
    		user.setSenha(encryptedPassword);
        	
        	userRepository.save(user);
        }
    }
}
