package com.guide.dao;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.guide.model.option.Places;

@Repository
public interface PlaceDao extends JpaRepository<Places, Long> {


	public Places findByname(String name);
	
	public Set<Places> findBystate_id(long id);
}
