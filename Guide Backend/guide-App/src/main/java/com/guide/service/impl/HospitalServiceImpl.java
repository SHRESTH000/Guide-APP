package com.guide.service.impl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.guide.dao.HospitalDao;
import com.guide.dao.StateDao;
import com.guide.helper.HospitalFoundException;
import com.guide.model.option.Hospitals;
import com.guide.model.option.State;
import com.guide.service.HospitalService;

@Service
public class HospitalServiceImpl implements HospitalService {

	@Autowired
	private HospitalDao hospitalDao;
	
	@Autowired
	private StateDao stateDao;
	
	@Override
	public Hospitals createHospital(Hospitals hospitals) {
      
		try {
			Hospitals existingHospital=this.hospitalDao.findByname(hospitals.getName());
			
			if(existingHospital!=null && existingHospital.getAddress().equals(hospitals.getAddress())) {
				throw new HospitalFoundException();
			}
			
			long stateId=hospitals.getState().getId();
			
			if (stateId == 0) {
	            throw new IllegalArgumentException("State ID cannot be null"); // Handle missing state ID
	        }
			

			State state = stateDao.findById(stateId)
	                .orElseThrow(() -> new RuntimeException("State not found"));
			hospitals.setState(state);
			state.getHospitals().add(hospitals);
			
			Hospitals insertedHospital=this.hospitalDao.save(hospitals);
			return insertedHospital;
			
		}catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public Hospitals updateHospital(Hospitals hospitals) {
		try {
			Hospitals updatedHospital=this.hospitalDao.save(hospitals);
			
			if(updatedHospital!=null) {
				return updatedHospital;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public Set<Hospitals> getHospital() {
		
		try {
			Set<Hospitals> allHospitals=new LinkedHashSet<>(this.hospitalDao.findAll());
			
			if(allHospitals!=null) {
				return allHospitals;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public Hospitals getHospitalById(long id) {
		try {
			Hospitals hospitals=this.hospitalDao.findById(id).get();
			
			if(hospitals!=null) {
				return hospitals;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public Set<Hospitals> getHospitalByState(long stateId) {
		
		try {
			Set<Hospitals> allHospitalsOfState=new LinkedHashSet<>(this.hospitalDao.findBystate_id(stateId));
			if(allHospitalsOfState!=null) {
				return allHospitalsOfState;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public void deleteHospital(long id) {
		try {
			this.hospitalDao.deleteById(id);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

}
