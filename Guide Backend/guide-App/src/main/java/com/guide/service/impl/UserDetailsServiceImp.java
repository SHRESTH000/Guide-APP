package com.guide.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.guide.dao.UserDao;
import com.guide.model.User;

@Service
public class UserDetailsServiceImp implements UserDetailsService{

	@Autowired
	private UserDao userDao;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		User user=this.userDao.findByUsername(username);
		
		if(user==null) {
			System.out.println("User not Found");
			throw new UsernameNotFoundException("User Not Found");
		}
		return user;
	}

}
