package com.guide.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.guide.model.User;
import com.guide.service.UserService;

@Controller
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

	@Autowired
	private UserService userService;
	//email verification
	
	@GetMapping("/verify-email")
	public ResponseEntity<?> verifyEmail(@RequestParam("token") String token) {
		
		User user =userService.findUserByEmailToken(token);
		
		if(user!=null) {
		
			if(user.getEmailToken().equals(token)) {
				user.setEmailVerified(true);
				user.setEnable(true);
				userService.updateUser(user);
				return ResponseEntity.ok("Email verified");
			}
			return ResponseEntity.internalServerError().body("Issue in verification");
		}
		
			return ResponseEntity.internalServerError().body("Issue in verification");
		
		
	}
}
