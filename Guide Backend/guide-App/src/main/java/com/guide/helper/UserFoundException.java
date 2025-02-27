package com.guide.helper;

public class UserFoundException extends RuntimeException {

	public UserFoundException() {
		super("User with this name is already exist in Db ! try again with different Username");
	}
	public UserFoundException(String msg) {
		super(msg);
	}
}
