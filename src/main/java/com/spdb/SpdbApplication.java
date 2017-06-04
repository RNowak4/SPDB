package com.spdb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class SpdbApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpdbApplication.class, args);
	}
}
