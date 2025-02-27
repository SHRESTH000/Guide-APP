package com.guide.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.guide.model.User;

@Repository
public interface UserDao extends JpaRepository<User, Long> {

	@Query(nativeQuery = true,value = "select * from exam.users where username= :UserName" )
	public User findByUsername(String UserName); 
	
	public User findByemailToken(String token);
}
