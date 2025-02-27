package com.guide.dao;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.guide.model.option.Restaurants;

@Repository
public interface RestaurantDao extends JpaRepository<Restaurants, Long> {

	public Restaurants findByname(String name);
	
	public Set<Restaurants> findBystate_id(long id);
}
