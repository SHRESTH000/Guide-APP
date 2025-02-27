package com.guide;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.guide.dao.UserDao;
import com.guide.model.Role;
import com.guide.model.User;
import com.guide.model.UserRole;
import com.guide.service.UserService;

@SpringBootApplication
public class GuideserverApplication implements CommandLineRunner {

	/*
	 * @Autowired private UserService Userservice;
	 */
	public static void main(String[] args) {
		SpringApplication.run(GuideserverApplication.class, args);
	}
//
//	@Override
	public void run(String... args) throws Exception {
//		
//		  System.out.println("Starting code");
//		  
//		  User user=new User(); user.setFirstName("SHRESTH");
//		  user.setLastName("KUMAR"); user.setEmail("Shresth@gmail.com");
//		  user.setUsername("Shresth"); user.setPassword("abc");
//		  user.setProfile("Shresth"); user.setPhone("98621638632");
//		  
//		  Role role=new Role(); 
//		  //role.setRoleId(10L); 
//		  role.setRoleName("ADMIN");
//		  
//		  Set<UserRole> userRoleSet=new HashSet<>(); UserRole userRole=new UserRole();
//		  userRole.setRole(role); userRole.setUser(user);
//		  
//		  userRoleSet.add(userRole);
//		  
//		  User user2=this.Userservice.createUser(user, userRoleSet); if(user2!=null) {
//		  System.out.println(user2.getUsername()); }else { System.out.println("NULL");
//		  }
//		 
	}

}
