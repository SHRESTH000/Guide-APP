package com.guide.service;

import java.util.Set;


import com.guide.model.option.Places;

public interface PlaceService {

	//creating places
	
	public Places createPlace(Places places);
	
	//updating places
	public Places updatePlace(Places places);
	
	//getting places
	
	public Set<Places> getPlace();
	
	//getting place by id
	public Places getPlaceById(long id);
	
	// get places by State 
	
	public Set<Places> getPlaceByState(long stateId);
	
	//delete places
	
	public void deletePlace(long id);
}
