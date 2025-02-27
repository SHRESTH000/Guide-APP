package com.guide.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.guide.helper.PlaceFoundException;
import com.guide.model.option.Places;
import com.guide.service.PlaceService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/place")
public class PlaceController {

	@Autowired
	private PlaceService placeService;
	
	@PostMapping("/")
	public ResponseEntity<?> createPlace(@Valid @RequestBody Places place, BindingResult result){
		
		if (result.hasErrors()) {
            // Collect all validation errors and return them as a JSON response
            Map<String, String> errors = new HashMap<>();
            for (FieldError error : result.getFieldErrors()) { 
                errors.put(error.getField(), error.getDefaultMessage());
            }
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
        }
		try {
			Places insertedPlace=this.placeService.createPlace(place);
			if(insertedPlace==null) {
				return ResponseEntity.internalServerError().body("Data is not inserted internal Server error");
			}
			return ResponseEntity.ok().body(insertedPlace);
		}catch (PlaceFoundException e) {
			System.out.println(e.getMessage());
			return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage()); // Or a custom error message
		} 
		catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().body("An unexpected error occurred."); // Return a generic error message to the client
		}
		//return null;
	}
	
	@GetMapping("/")
	public ResponseEntity<?> getPlaces(){
		
		try {
			Set<Places> allPlaces=this.placeService.getPlace();
			
			if(allPlaces.isEmpty()) {
				return ResponseEntity.internalServerError().body("NO Data is found");
			}
			return ResponseEntity.ok().body(allPlaces);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.internalServerError().body("An unexpected error Occured");
		}
		
	}
	@GetMapping("/{placeId}")
	public ResponseEntity<?> getPlaceById(@PathVariable("placeId") long id){
		
		try {
			Places places=this.placeService.getPlaceById(id);
			if(places==null) {
				return ResponseEntity.internalServerError().body("NO data is found in database");
			}
			return ResponseEntity.ok().body(places);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			e.printStackTrace();
			return ResponseEntity.internalServerError().body("Some unexpected error occured");
		}
		  
	}
	
	@GetMapping("/state/{stateId}")
	public ResponseEntity<?> getPlacesOfState(@PathVariable("stateId") long id){
		
		try {
			Set<Places> allPlacesOfstate=this.placeService.getPlaceByState(id);
			
			if(allPlacesOfstate.isEmpty()) {
				return ResponseEntity.internalServerError().body("No data is found");
			}
			return ResponseEntity.ok().body(allPlacesOfstate);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			e.printStackTrace();
			return ResponseEntity.internalServerError().body("unexpected error happpen");
		}
		
	}
	
	@PutMapping("/")
	public ResponseEntity<?> updatePlace(@RequestBody Places places){
		try {
			Places updatedPlaces=this.placeService.updatePlace(places);
			if(updatedPlaces==null) {
				return ResponseEntity.internalServerError().body("No data is found and Updated");
			}
			return ResponseEntity.ok().body(updatedPlaces);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			e.printStackTrace();
			return ResponseEntity.internalServerError().body("unexpected error happpen");
		}
	}
	
	@DeleteMapping("/{placeId}")
	public ResponseEntity<?> deletePlaceById(@PathVariable("placeId")long id){
		try {
			this.placeService.deletePlace(id);
			return ResponseEntity.ok().body("Data Deleted");
		} catch (Exception e) {
			System.out.println(e.getMessage());
			e.printStackTrace();
			return ResponseEntity.internalServerError().body("unexpected error happpen");
		}
	}
}
