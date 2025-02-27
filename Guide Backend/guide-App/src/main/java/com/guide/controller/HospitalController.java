package com.guide.controller;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.guide.model.option.Hospitals;
import com.guide.service.HospitalService;

@RestController
@RequestMapping("/hospital")
public class HospitalController {

	@Autowired
	private HospitalService hospitalService;
	
	@PostMapping("/")
	public ResponseEntity<?> createHospital(@RequestBody Hospitals hospitals){
		try {
			Hospitals insertedHospital=this.hospitalService.createHospital(hospitals);
			if(insertedHospital==null) {
				return ResponseEntity.badRequest().body("data is not inserted some error Occur");
			}
			return ResponseEntity.ok().body(insertedHospital);
		} catch (Exception e) {
			System.err.println(e.getMessage());
			e.printStackTrace();
			return ResponseEntity.internalServerError().body("Some unexpected Error occur");
		}
	}
	
	@GetMapping("/")
	public ResponseEntity<?> getHospitals(){
		try {
			Set<Hospitals> allHospitals=this.hospitalService.getHospital();
			if(allHospitals.isEmpty()) {
				return ResponseEntity.badRequest().body("No data is found in database");
			}
			return ResponseEntity.ok().body(allHospitals);
		} catch (Exception e) {
			System.err.println(e.getMessage());
			e.printStackTrace();
			return ResponseEntity.internalServerError().body("Some unexpected Error occur");
		}
	}
	@GetMapping("/{hospitalId}")
	public ResponseEntity<?> getHospitalById(@PathVariable("hospitalId") long id){
		
		try {
			Hospitals hospital=this.hospitalService.getHospitalById(id);
			if(hospital==null) {
				return ResponseEntity.badRequest().body("No data is found in database");
			}
			return ResponseEntity.ok().body(hospital);
		} catch (Exception e) {
			System.err.println(e.getMessage());
			e.printStackTrace();
			return ResponseEntity.internalServerError().body("Some unexpected Error occur");
		}
	}
	@GetMapping("/state/{stateId}")
	public ResponseEntity<?> getHospitalByState(@PathVariable("stateId") long id){
		try {
			Set<Hospitals> allHospitalsOfState=new LinkedHashSet<>(this.hospitalService.getHospitalByState(id));
			
			if(allHospitalsOfState.isEmpty()) {
				return ResponseEntity.badRequest().body("No data is found in database");
			}
			return ResponseEntity.ok().body(allHospitalsOfState);
		} catch (Exception e) {
			System.err.println(e.getMessage());
			e.printStackTrace();
			return ResponseEntity.internalServerError().body("Some unexpected Error occur");
		}
	}
	
	@PutMapping("/")
	public ResponseEntity<?> updateHospital(@RequestBody Hospitals hospitals){
		try {
			Hospitals updatedhospitals=this.hospitalService.updateHospital(hospitals);
			if(updatedhospitals==null) {
				return ResponseEntity.badRequest().body("No data is found in database");
			}
			return ResponseEntity.ok().body(updatedhospitals);
		} catch (Exception e) {
			System.err.println(e.getMessage());
			e.printStackTrace();
			return ResponseEntity.internalServerError().body("Some unexpected Error occur");
		}
	}
	
	@DeleteMapping("/{hospitalId}")
	public ResponseEntity<?> deleteById(@PathVariable("hospitalId")long id){
		try {
			this.hospitalService.deleteHospital(id);
			return ResponseEntity.ok().body("data deleted");
		} catch (Exception e) {

			return ResponseEntity.badRequest().body("No data is found in database");
		}
	}
}
