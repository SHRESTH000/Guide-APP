package com.guide.service;

import java.util.Set;


import com.guide.model.option.Restaurants;



public interface RestaurantService {

	//creating places
	
		public Restaurants createRestaurant(Restaurants restaurants);
		
		//updating places
		public Restaurants updateRestaurant(Restaurants restaurants);
		
		//getting Restaurant
		
		public Set<Restaurants> getRestaurant();
		
		//getting Restaurant by id
		public Restaurants getRestaurantById(long id);
		
		// get Restaurant by State 
		
		public Set<Restaurants> getRestaurantByState(long stateId);
		
		//delete Restaurant
		
		public void deleteRestaurant(long id);
}
