package com.cheung.jeremy.server.student;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class studentConfig {
    
    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository) {
        return args -> {
            Student gen = new Student(
		    "Gen",
			"gen.eral@gmail.com",
			    LocalDate.of(2000, Month.JANUARY, 5)
		    );

            Student steve = new Student(
		    "Steve",
			"Ste.ve@gmail.com",
			    LocalDate.of(2002, Month.FEBRUARY, 2)
		    );

            repository.saveAll(
                List.of(gen, steve)
            );
        };        
    }
}
