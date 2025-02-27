package com.guide.dao;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.guide.model.option.Hospitals;


@Repository
public interface HospitalDao extends JpaRepository<Hospitals,Long>{

	public Hospitals findByname(String name);
	
	public Set<Hospitals> findBystate_id(long id);
}
