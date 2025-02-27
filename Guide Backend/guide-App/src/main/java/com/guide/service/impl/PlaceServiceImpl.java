package com.guide.service.impl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.guide.dao.PlaceDao;
import com.guide.dao.StateDao;
import com.guide.helper.PlaceFoundException;
import com.guide.model.option.Places;
import com.guide.model.option.State;
import com.guide.service.PlaceService;

@Service
@Transactional
public class PlaceServiceImpl implements PlaceService {

	
	@Autowired
	private PlaceDao placeDao;
	
	@Autowired
	private StateDao stateDao;
	
	@Override
	public Places createPlace(Places places) {
		
		try {
		Places	exitingPlace=this.placeDao.findByname(places.getName());
		
		
		if(exitingPlace!=null && exitingPlace.getAddress().equals(places.getAddress())) {
		
			System.out.println(exitingPlace.getName());
			throw new PlaceFoundException();
			
		}
		
		long stateId=places.getState().getId();
		
		if (stateId == 0) {
            throw new IllegalArgumentException("State ID cannot be null"); // Handle missing state ID
        }
		

		State state = stateDao.findById(stateId)
                .orElseThrow(() -> new RuntimeException("State not found"));
		
        // Set the State entity in the Places entity
        places.setState(state);
        state.getPlaces().add(places);

		Places insertedPlace=this.placeDao.save(places);
		return insertedPlace;
		
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public Places updatePlace(Places places) {
	try {
		
		Places updatedPlaces=this.placeDao.save(places);
		
		if(updatedPlaces!=null) {
			return updatedPlaces;
		}
	} catch (Exception e) {
		e.printStackTrace();
	}
		return null;
	}

	@Override
	public Set<Places> getPlace() {
		try {
			
			Set<Places> allPlaces=new LinkedHashSet<>(this.placeDao.findAll());
			
			if(allPlaces!=null) {
				return allPlaces;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public Places getPlaceById(long id) {
		
		try {
			Places places=this.placeDao.findById(id).get();
			if(places!=null) {
				return places;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public Set<Places> getPlaceByState(long stateId) {
		try {
			
			Set<Places> allPlaces=this.placeDao.findBystate_id(stateId);
			
			if(allPlaces!=null) {
				return allPlaces;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public void deletePlace(long id) {
		try {
			this.placeDao.deleteById(id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

}
