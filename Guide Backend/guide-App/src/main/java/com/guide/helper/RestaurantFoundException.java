package com.guide.helper;

public class RestaurantFoundException extends RuntimeException {

	public RestaurantFoundException() {
		super("Restaurant With this name and address have already in database");
	}
	public RestaurantFoundException(String msg) {
		super(msg);
	}
}
