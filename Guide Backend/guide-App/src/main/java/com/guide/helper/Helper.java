package com.guide.helper;

public class Helper {

	public static String getLinkForEmailVerification(String emailToken) {
		
		String link="http://localhost:8084/auth/verify-email?token="+emailToken;
		
		return link;
	}
}
