package com.guide.helper;

public class HospitalFoundException extends RuntimeException {

	public HospitalFoundException() {
		super("Hospital with this name and address exist in database ");
	}
	
	public HospitalFoundException(String msg) {
		super(msg);
	}
}
