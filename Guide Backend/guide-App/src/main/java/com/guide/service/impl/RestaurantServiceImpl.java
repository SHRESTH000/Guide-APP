package com.guide.service.impl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.guide.dao.RestaurantDao;
import com.guide.dao.StateDao;
import com.guide.helper.RestaurantFoundException;
import com.guide.model.option.Restaurants;
import com.guide.model.option.State;
import com.guide.service.RestaurantService;

@Service
public class RestaurantServiceImpl implements RestaurantService {

	@Autowired
	private RestaurantDao restaurantDao;
	
	@Autowired
	private StateDao stateDao;
	
	@Override
	public Restaurants createRestaurant(Restaurants restaurants) {
		try {
			Restaurants existingRestaurants =this.restaurantDao.findByname(restaurants.getName());
			
			if(existingRestaurants!=null && existingRestaurants.getAddress().equals(restaurants.getAddress())) {
				throw new RestaurantFoundException();
			}
			long stateId=restaurants.getState().getId();
			
			if (stateId == 0) {
	            throw new IllegalArgumentException("State ID cannot be null"); // Handle missing state ID
	        }
			

			State state = stateDao.findById(stateId)
	                .orElseThrow(() -> new RuntimeException("State not found"));
			
			restaurants.setState(state);
			state.getRestaurants().add(restaurants);
			
			Restaurants insertedRestaurants=this.restaurantDao.save(restaurants);
			return insertedRestaurants;
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return null;
	}

	@Override
	public Restaurants updateRestaurant(Restaurants restaurants) {
		try {
			Restaurants updatedRestaurants=this.restaurantDao.save(restaurants);
			if(updatedRestaurants!=null) {
				return updatedRestaurants;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public Set<Restaurants> getRestaurant() {
		
		try {
			Set<Restaurants> allRestaurants=new LinkedHashSet<>(this.restaurantDao.findAll());
			if(allRestaurants!=null) {
				return allRestaurants;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public Restaurants getRestaurantById(long id) {
		try {
			Restaurants restaurants=this.restaurantDao.findById(id).get();
			if(restaurants!=null) {
				return restaurants;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public Set<Restaurants> getRestaurantByState(long stateId) {
		try {
			Set<Restaurants> allRestaurantsOfState=new LinkedHashSet<>(this.restaurantDao.findBystate_id(stateId));
			if (allRestaurantsOfState!=null) {
				return allRestaurantsOfState;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public void deleteRestaurant(long id) {
		try {
			this.restaurantDao.deleteById(id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

}
