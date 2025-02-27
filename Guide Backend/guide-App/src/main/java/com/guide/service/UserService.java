package com.guide.service;

import java.util.Set;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.guide.model.User;
import com.guide.model.UserRole;


public interface UserService {

	//creating user
	public ResponseEntity<?> createUser(User user,Set<UserRole>userRole); 
	
	//get user
	public User findUserByUserName(String username);
	
	//delete user by userid
	public void deleteUserByid(long userid);
	
	// find user by email token
	public User findUserByEmailToken(String token);
	
	//update user 
	
	public User updateUser(User user);
	
}
