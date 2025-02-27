package com.guide.service.impl;

import java.util.Optional;
import java.util.Set;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.guide.dao.RoleDao;
import com.guide.dao.UserDao;
import com.guide.helper.Helper;
import com.guide.helper.UserFoundException;
import com.guide.model.Role;
import com.guide.model.User;
import com.guide.model.UserRole;
import com.guide.service.EmailService;
import com.guide.service.UserService;

import jakarta.transaction.Transactional;

@Service
public class UserServiceImp implements UserService {

	@Autowired
	private UserDao userDao;

	@Autowired
	private RoleDao roleDao;

	@Autowired
	private EmailService emailService;

//	@Override
//	public User createUser(User user, Set<UserRole> userRole) {
//
//		try {
//			User local = userDao.findByUsername(user.getUsername());
//			if (local != null) {
//				System.out.println("User exsit already");
//				throw new Exception("User Already exist");
//			} else {
//				// create user
//				for (UserRole ur : userRole) {
//					roleDao.save(ur.getRole());
//				}
//				user.getUserRoles().addAll(userRole);
//				User user1 = this.userDao.save(user);
//				return user1;
//			}
//		} catch (Exception e) {
//			// TODO: handle exception
//		}
//		return null;
//	}

//	@Override
//	@Transactional
//	public User createUser(User user, Set<UserRole> userRole) {
//	    System.out.println("Reached 1");
//		try {
//	        User local = userDao.findByUsername(user.getUsername());
//	        System.out.println("Reached 2");
//	        if (local != null) {
//	            System.out.println("User already exists");
//	            System.out.println("Reached 3");
//	            return local; // return the existing user
//	        } else {
//	            // create user
//	        	System.out.println("Reached 4");
////	            for (UserRole ur : userRole) {
////	            	Role role = ur.getRole();
////	                roleDao.save(role);
////	            }
//	        	for (UserRole ur : userRole) {
//	                Role role = ur.getRole();
//	                Optional<Role> optional = roleDao.findById(role.getRoleId());
//	                if (optional.isPresent()) {
//	                    Role existingRole = optional.get();
//	                    ur.setRole(existingRole);
//	                } else {
//	                    roleDao.save(role);
//	                }
//
//	            }
//	            System.out.println("Reached 5");
//	           // user.getUserRoles().addAll(userRole);
//	            User user1 = this.userDao.save(user);
//	            System.out.println(user1.getFirstName());
//	            System.out.println("Reached 6");
//	            return user1;
//	        }
//	    } catch (Exception e) {
//	        // TODO: handle exception
//	        return null;
//	    }
//	}
	@Override
	@Transactional
	public ResponseEntity<?> createUser(User user, Set<UserRole> userRole) {
		try {
			User existingUser = userDao.findByUsername(user.getUsername());
			if (existingUser != null) {
				System.out.println("User already exists");
				//throw new UserFoundException("user Already exits");
				 return ResponseEntity.status(HttpStatus.CONFLICT).body("User ALready Exist"); // If the user already exists, return it
			}
 
			// Process roles and associate with UserRole
			for (UserRole ur : userRole) {
				Role role = ur.getRole();
				Optional<Role> optionalRole = roleDao.findById(role.getRoleId());

				if (optionalRole.isPresent()) {
					ur.setRole(optionalRole.get()); // Use existing role if found
				} else {
					roleDao.save(role); // Save new role if it doesn't exist
				}
			}
 
			// Now save the user along with associated roles
			user.getUserRoles().addAll(userRole);
			// Cascading will persist the roles and user roles
			String Emailtoken = UUID.randomUUID().toString();
			user.setEmailToken(Emailtoken);
			User newUser = this.userDao.save(user);
			String emailLink = Helper.getLinkForEmailVerification(Emailtoken);
			emailService.sendEmail(newUser.getEmail(), "Verify", "click on this link to verfiy:   " + emailLink);

			return ResponseEntity.ok().body(newUser);
		} catch (UserFoundException e) {
			e.getMessage();
		}catch (Exception e) {
			e.printStackTrace();
			return null;
		}

		return null;
	}

	@Override
	public User findUserByUserName(String username) {

		return this.userDao.findByUsername(username);
	}

	@Override
	public void deleteUserByid(long userid) {

		this.userDao.deleteById(userid);

	}

	@Override
	public User findUserByEmailToken(String token) {

		try {

			User user = userDao.findByemailToken(token);
			if (user == null) {
				System.out.println("NO User in Database");
				throw new RuntimeException();
			} else {
				return user;
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public User updateUser(User user) {
		try {

			if (user == null) {
				System.out.println("User is null in updating");
				throw new RuntimeException("User is null");
			}
			userDao.save(user);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return user;
	}

}
