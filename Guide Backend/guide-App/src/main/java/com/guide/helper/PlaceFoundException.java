package com.guide.helper;

public class PlaceFoundException extends RuntimeException {

	public PlaceFoundException() {
		super("The place with this name is already exist in db");
	}
	public PlaceFoundException(String msg) {
		super(msg);
	}
}
