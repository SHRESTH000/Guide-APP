package com.guide.helper;

public class StateFoundException extends RuntimeException {

	public StateFoundException() {
		super("State with this name is already present in db");
	}
     
	public StateFoundException(String msg) {
		super(msg);
	}
}
