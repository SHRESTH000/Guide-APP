package com.guide.service;

import java.util.Set;

import com.guide.model.option.State;

public interface StateService {

	
	//creating state;
	public State createState(State state);
	
	//update state
	public  State updateState(State state);
	
	//get state 
	
	public Set<State> getState();
	
	//get state by name
	
	public State getStateByName(String name);
	
	//get state by Id
	
	public State getStateById(long id);
	
	//Delete state
	
	public void deleteState(long id);
	
	
	
	
	
	
}
