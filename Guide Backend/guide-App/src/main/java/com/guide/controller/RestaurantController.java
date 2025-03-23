package com.guide.controller;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.guide.model.option.Restaurants;
import com.guide.service.RestaurantService;

@RestController
@RequestMapping("/restaurant")
@CrossOrigin("*")
public class RestaurantController {

	
	@Autowired
	private RestaurantService restaurantService;
	
	@PostMapping("/")
	public ResponseEntity<?> createRestaurant(@RequestBody Restaurants restaurants){
		
		try {
			Restaurants insertedRestaurants=this.restaurantService.createRestaurant(restaurants);
			
			if(insertedRestaurants==null) {
				return ResponseEntity.badRequest().body("Data is not isserted , some error occur");
			}
			return ResponseEntity.ok().body(restaurants);
		} catch (Exception e) {
			System.err.println(e.getMessage());
			e.printStackTrace();
			return ResponseEntity.internalServerError().body("Some unexpected Error Occur ");
		}
	}
	
	@PutMapping("/")
	public ResponseEntity<?> updateRestaurant(@RequestBody Restaurants restaurants){
		try {
			Restaurants updatedRestaurant=this.restaurantService.updateRestaurant(restaurants);
			if(updatedRestaurant==null) {
				return ResponseEntity.badRequest().body("Data is not updated , due to some technical error ");
			}
			return ResponseEntity.ok().body(updatedRestaurant);
		} catch (Exception e) {
			System.err.println(e.getMessage());
			e.printStackTrace();
			return ResponseEntity.internalServerError().body("Some unexpected Error Occur ");
		}
	}
	
	@GetMapping("/")
	public ResponseEntity<?> getRestaurants(){
		try {
		Set<Restaurants> allRestaurants=new LinkedHashSet<>(this.restaurantService.getRestaurant());
		
		if(allRestaurants.isEmpty()) {
			return ResponseEntity.badRequest().body("No Data is Found in Database");
		}
		return ResponseEntity.ok().body(allRestaurants);
		} catch (Exception e) {
			System.err.println(e.getMessage());
			e.printStackTrace();
			return ResponseEntity.internalServerError().body("Some unexpected Error Occur ");
		}
	}
	
	@GetMapping("/{restaurantId}")
	public ResponseEntity<?> getRestaurantById(@PathVariable("restaurantId") long id){
		try {
			
		Restaurants restaurants=this.restaurantService.getRestaurantById(id);
		
		if(restaurants==null) {
			return ResponseEntity.badRequest().body("No Data is Found in Database");
		}
		return ResponseEntity.ok().body(restaurants);
		} catch (Exception e) {
			System.err.println(e.getMessage());
			e.printStackTrace();
			return ResponseEntity.internalServerError().body("Some unexpected Error Occur ");
		}
	}
	@GetMapping("/state/{stateId}")
	public ResponseEntity<?> getRestaurantOfState(@PathVariable("stateId") long id){
		try {
			Set< Restaurants> allRestaurantsOfState=new LinkedHashSet<>(this.restaurantService.getRestaurantByState(id));
			if (allRestaurantsOfState.isEmpty()) {
				return ResponseEntity.badRequest().body("No Data is Found in Database");
			}
			return ResponseEntity.ok().body(allRestaurantsOfState);
		} catch (Exception e) {
			System.err.println(e.getMessage());
			e.printStackTrace();
			return ResponseEntity.internalServerError().body("Some unexpected Error Occur ");
		}
	}
	
	@DeleteMapping("/{restaurantId}")
	public ResponseEntity<?> deleteRestaurantById(@PathVariable("restaurantId")long id){
		try {
			this.restaurantService.deleteRestaurant(id);
			return ResponseEntity.ok().body("Data is deleted");
		} catch (Exception e) {
			System.err.println(e.getMessage());
			e.printStackTrace();
			return ResponseEntity.internalServerError().body("Some unexpected Error Occur ");
		}
	}
}
