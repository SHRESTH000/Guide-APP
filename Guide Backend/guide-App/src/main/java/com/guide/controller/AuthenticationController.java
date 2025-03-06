package com.guide.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.guide.config.JwtUtil;
import com.guide.dao.UserDao;
import com.guide.model.JwtRequest;
import com.guide.model.JwtResponse;
import com.guide.model.User;
import com.guide.service.impl.UserDetailsServiceImp;

@RestController
public class AuthenticationController {

	@Autowired
	public AuthenticationManager authenticationManager;

	@Autowired
	public UserDetailsServiceImp userDetailsServiceImp;

	@Autowired
	public JwtUtil jwtUtil;

	//generate token
	
	@PostMapping("/generate-token")
	public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception{
		
		try {
			//System.out.println("this is username "+jwtRequest.getUsername());
			
			authenticate(jwtRequest.getUsername(), jwtRequest.getPassword());
			
		} catch (UsernameNotFoundException e) {
			e.printStackTrace();
			throw new Exception("User not Found");
		}
		
		UserDetails userDetails=this.userDetailsServiceImp.loadUserByUsername(jwtRequest.getUsername());
		
		String token=this.jwtUtil.generateToken(userDetails);
		JwtResponse response=new JwtResponse();
		response.setToken(token);
		response.setUser(jwtRequest.getUsername());
		
		
		 return ResponseEntity.ok(response);
		
	}
	
	
	
	
	private void authenticate(String username, String password) throws Exception {

		try {

			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {

			throw new Exception("USER DISABLE " + e.getMessage());
		} catch (BadCredentialsException e) {

			throw new Exception("Bad credentials " + e.getMessage());
		}
	}
	
	@GetMapping("/current-user")
	public User getCurrentUser(Principal principal) {
		
		return ((User)this.userDetailsServiceImp.loadUserByUsername(principal.getName()));
	}
}
