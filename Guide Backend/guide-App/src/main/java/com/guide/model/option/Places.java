package com.guide.model.option;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.Size;

@Entity
public class Places {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long pId;
	
	private String name;
	
	@Size(max = 5000,message = "Data must be less than 5000 ")
	private String description;
	
	@Size(max = 1000, message = "Data must be less than 1000")
	private String address;
	
	private double latitude;
	
	private double longitude;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "state_id",nullable = false)
	private State state;

	
	
	
	public Places() {
		super();
		// TODO Auto-generated constructor stub
	}

     

	public Places(long pId, String name, String description, String address, double latitude, double longitude,
			State state) {
		super();
		this.pId = pId;
		this.name = name;
		this.description = description;
		this.address = address;
		this.latitude = latitude;
		this.longitude = longitude;
		this.state = state;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	public long getpId() {
		return pId;
	}

	public void setpId(long pId) {
		this.pId = pId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getLatitude() {
		return latitude;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

	public State getState() {
		return state;
	}

	public void setState(State state) {
		this.state = state;
	}
	
	
	
}
