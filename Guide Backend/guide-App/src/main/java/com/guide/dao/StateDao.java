package com.guide.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.guide.model.option.State;

@Repository
public interface StateDao extends JpaRepository<State, Long> {

	public State findByname(String name);
	
	
}
