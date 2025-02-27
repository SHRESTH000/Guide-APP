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

import com.guide.model.option.State;
import com.guide.service.StateService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/state")
public class StateController {

	@Autowired
	private StateService stateService;
	
	@PostMapping("/")
	public ResponseEntity<?> createState(@Valid @RequestBody State state ,BindingResult result){
		if (result.hasErrors()) {
            // Collect all validation errors and return them as a JSON response
            Map<String, String> errors = new HashMap<>();
            for (FieldError error : result.getFieldErrors()) { 
                errors.put(error.getField(), error.getDefaultMessage());
            }
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
        }
		try {
			
			State state2=this.stateService.createState(state);
			if(state2 !=null) {
			return ResponseEntity.ok().body(state2);
			}else {
				return ResponseEntity.internalServerError().body("Some error Occur During creation");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
	@GetMapping("/")
	public ResponseEntity<?> getAllState(){
		
		try {
			Set<State> allState=this.stateService.getState();
			if(allState.isEmpty()) {
				return ResponseEntity.badRequest().body("No Data found in Database , server error");
			}
			return ResponseEntity.ok().body(allState);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
	@GetMapping("/{stateId}")
	public ResponseEntity<?> getStateById(@PathVariable("stateId") long stateId){
		
		try {
			 State state=this.stateService.getStateById(stateId);
			 if(state==null) {
				 return ResponseEntity.internalServerError().body("No State present on this ID");
			 }
			 return ResponseEntity.ok().body(state);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
	@PutMapping("/")
	public ResponseEntity<?> updateState(@RequestBody State state){
		
		try {
			
			State updatedState=this.stateService.updateState(state);
			
			if(updatedState==null) {
				return ResponseEntity.internalServerError().body("Server error , cant update the data");
			}
			return ResponseEntity.ok().body(updatedState);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
		return null;
	}
	
	@DeleteMapping("/{stateId}")
	public ResponseEntity<?> deleteStateById(@PathVariable("stateId") long id){
		
		try {
			this.stateService.deleteState(id);
			return ResponseEntity.ok().body("Data Deleted");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	
}
