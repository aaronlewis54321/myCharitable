package com.application.mycharitable;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class MycharitableApplication {

	public static void main(String[] args) {
		SpringApplication.run(MycharitableApplication.class, args);
	}

}
