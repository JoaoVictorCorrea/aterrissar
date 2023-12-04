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
            Aeroporto aeroporto3 = new Aeroporto("Aeroporto Internacional de Belo Horizonte", "CNF", "LMG-800, 76 - Rodoviario, Confins - MG, 33500-000", "Brasil", "Minas Gerais");
            Aeroporto aeroporto4 = new Aeroporto("Aeroporto Internacional de Natal", "NAT", "Av. Dr. Ruy Pereira dos Santos, 3100 - Aeroporto, São Gonçalo do Amarante - RN, 59290-000", "Brasil", "Rio Grande do Norte");
            Aeroporto aeroporto5 = new Aeroporto("Aeroporto Internacional de Florianópolis", "FLN", "Rod. Ac. ao Aeroporto, 6.200 - Carianos, Florianópolis - SC, 88047-902", "Brasil", "Santa Catarina");
            Aeroporto aeroporto6 = new Aeroporto("Aeroporto Internacional de Goiânia", "GYN", "Alameda 4, s/n - Santa Genoveva, Goiânia - GO", "Brasil", "Goiás");
            Aeroporto aeroporto7 = new Aeroporto("Aeroporto Internacional de Manaus", "MAO", "Av. Santos Dumont, 1350 - Tarumã, Manaus - AM, 69041-000", "Brasil", "Amazonas");
            Aeroporto aeroporto8 = new Aeroporto("Aeroporto Internacional do Recife", "REC", "Praça Min. Salgado Filho, s/n - Imbiribeira, Recife - PE, 51210-902", "Brasil", "Pernambuco");
            
            aeroportoRepository.save(aeroporto1);
            aeroportoRepository.save(aeroporto2);
            aeroportoRepository.save(aeroporto3);
            aeroportoRepository.save(aeroporto4);
            aeroportoRepository.save(aeroporto5);
            aeroportoRepository.save(aeroporto6);
            aeroportoRepository.save(aeroporto7);
            aeroportoRepository.save(aeroporto8);
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
