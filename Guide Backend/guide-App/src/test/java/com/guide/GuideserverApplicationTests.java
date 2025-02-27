package com.guide;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.guide.service.EmailService;

@SpringBootTest
class GuideserverApplicationTests {

	@Test
	void contextLoads() {
	}
	
	@Autowired
	private EmailService emailService;
	@Test
	void sendEmailtest() {
		
		emailService.sendEmail("yadavshresth000@gmail.com","Testing", "this is testing message ");
	}

}
