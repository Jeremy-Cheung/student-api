package com.cheung.jeremy.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cheung.jeremy.server.student.Student;

import java.time.Month;
import java.time.LocalDate;
import java.util.*;

@SpringBootApplication
@RestController
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	@GetMapping
	public List<Student> hello() {
		return List.of(new Student(
			1L,
			"Gen",
			"gen@gmail.com",
			LocalDate.of(2000, Month.JANUARY, 5),
			21
		));
	}

}
