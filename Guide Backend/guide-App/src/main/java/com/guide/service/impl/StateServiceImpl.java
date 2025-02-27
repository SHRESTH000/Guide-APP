package com.guide.service.impl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.guide.dao.StateDao;
import com.guide.helper.StateFoundException;
import com.guide.model.option.State;
import com.guide.service.StateService;

@Service
public class StateServiceImpl implements StateService {

	@Autowired
	private StateDao stateDao;
	
	@Override
	public State createState(State state) {
		
		
		try {
		      
			State existingState =this.stateDao.findByname(state.getName());
			
			if(existingState!=null) {
				
				throw new StateFoundException();
				//return ResponseEntity.status(HttpStatus.CONFLICT).body("State with this name exist");
				
			}
			
			State returnState=this.stateDao.save(state);			
				return returnState;
			
		} catch (StateFoundException e) {
			e.printStackTrace();
		}catch (Exception e) {
			
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public State updateState(State state) {
		
		try {
			State updatedState=this.stateDao.save(state);
			
			if(updatedState!=null) {
				return updatedState;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public Set<State> getState() {
		
		try {
		Set<State> allSet=new LinkedHashSet<>(this.stateDao.findAll());
		
		if(allSet.isEmpty()) {
			return null;
		}
		return allSet;
		}catch (Exception e) {
			e.printStackTrace();
		}
		
		return null;
	}

	@Override
	public State getStateById(long id) {
		
		try {
			
			State state=this.stateDao.findById(id).get();
			
			
			return state;
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public void deleteState(long id) {
		try {
			this.stateDao.deleteById(id);
			
		//	return ResponseEntity.ok().body("Data Deleted");
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

}
