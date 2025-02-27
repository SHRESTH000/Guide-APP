package com.guide.model.option;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Hospitals {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long hId;
	
	private String name;
	
	private String description;
	
	private String address;
	
	

	private double latitude;
	
	private double longitude;

	@ManyToOne
    @JoinColumn(name = "state_id",nullable = false)
	private State state;

	

	public Hospitals(long hId, String name, String description, String address, double latitude, double longitude,
			State state) {
		super();
		this.hId = hId;
		this.name = name;
		this.description = description;
		this.address = address;
		this.latitude = latitude;
		this.longitude = longitude;
		this.state = state;
	}

	public Hospitals() {
		super();
		// TODO Auto-generated constructor stub
	}

	public long gethId() {
		return hId;
	}

	public void sethId(long hId) {
		this.hId = hId;
	}

	public String getName() {
		return name;
	}
	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
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
