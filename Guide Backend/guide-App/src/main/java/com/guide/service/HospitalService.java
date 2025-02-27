package com.guide.service;

import java.util.Set;

import org.springframework.http.ResponseEntity;

import com.guide.model.option.Hospitals;


public interface HospitalService {

	//creating hospital
	
		public Hospitals createHospital(Hospitals hospitals);	
		
		//updating hospital
		public Hospitals updateHospital(Hospitals hospitals);
		
		//getting hospital
		
		public Set<Hospitals> getHospital();
		
		//getting hospital by id
		public Hospitals getHospitalById(long id);
		
		// get hospital by State 
		
		public Set<Hospitals> getHospitalByState(long stateId);
		
		//delete hospitals
		public void deleteHospital(long id);
}
