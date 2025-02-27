package com.guide.model.option;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class State {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "state", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Places> places;

    @OneToMany(mappedBy = "state", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Hospitals> hospitals;

    @OneToMany(mappedBy = "state", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Restaurants> restaurants;

    private String description;
    
    private double latitude;
    
    private double longitude;
    
    
    
    
    public State(Long id, String name, Set<Places> places, Set<Hospitals> hospitals, Set<Restaurants> restaurants,
			String description, double latitude, double longitude) {
		super();
		this.id = id;
		this.name = name;
		this.places = places;
		this.hospitals = hospitals;
		this.restaurants = restaurants;
		this.description = description;
		this.latitude = latitude;
		this.longitude = longitude;
	}
    
    

	public State() {
		super();
		// TODO Auto-generated constructor stub
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

  // Getters and Setters
    public Long getId() {
        return id;
    }

//    public void setId(Long id) {
//        this.id = id;
//    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Places> getPlaces() {
        return places;
    }

    public void setPlaces(Set<Places> places) {
        this.places = places;
    }

    public Set<Hospitals> getHospitals() {
        return hospitals;
    }

    public void setHospitals(Set<Hospitals> hospitals) {
        this.hospitals = hospitals;
    }

    public Set<Restaurants> getRestaurants() {
        return restaurants;
    }

    public void setRestaurants(Set<Restaurants> restaurants) {
        this.restaurants = restaurants;
    }
}