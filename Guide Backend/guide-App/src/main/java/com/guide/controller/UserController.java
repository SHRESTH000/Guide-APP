package com.guide.controller;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import com.guide.helper.UserFoundException;
import com.guide.model.Role;
import com.guide.model.User;
import com.guide.model.UserRole;
import com.guide.service.UserService;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    /**
     * Registers a new user with validation checks
     */
    @PostMapping("/create")
    public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult result) {
        if (result.hasErrors()) {
            // Collect all validation errors and return them as a JSON response
            Map<String, String> errors = new HashMap<>();
            for (FieldError error : result.getFieldErrors()) { 
                errors.put(error.getField(), error.getDefaultMessage());
            }
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
        }

        try {
        	System.out.println("Reached");
            // Encrypt the password before saving
            user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
            user.setProfile("default.png");

            Set<UserRole> roles = new HashSet<>();
            Role role = new Role();
            role.setRoleName("NORMAL");

            UserRole userRole = new UserRole();
            userRole.setUser(user);
            userRole.setRole(role);
            roles.add(userRole);

            ResponseEntity<?> savedUser = this.userService.createUser(user, roles);
            return ResponseEntity.ok(savedUser);
        } catch (UserFoundException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User already exists");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while creating the user");
        }
    }

    /**
     * Retrieves user by username
     */
    @GetMapping("/getUserByUserName/{username}")
    public ResponseEntity<?> getUser(@PathVariable("username") String username) {
        User user = this.userService.findUserByUserName(username);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
        return ResponseEntity.ok(user);
    }

    /**
     * Deletes a user by ID
     */
    @DeleteMapping("/deleteById/{id}")
    public ResponseEntity<?> deleteUserById(@PathVariable("id") long id) {
        try {
            this.userService.deleteUserByid(id);
            return ResponseEntity.ok("User deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }
    
    @PutMapping("/update")
    public User UpdateUser(@Valid @RequestBody User user) {
    	try {
			
    		if(user==null) {
    			
    		}
    		User user2=userService.updateUser(user);
    		
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
    	return user;
    }
    
    
    @ExceptionHandler(UserFoundException.class)
	public ResponseEntity<?> ExceptionalHandler(UserFoundException ex){
		return ResponseEntity.internalServerError().body(ex.getMessage());
	}
    private ResponseEntity<Map<String, String>> handleConstraintViolationException(ConstraintViolationException ex) {
        Map<String, String> errors = new HashMap<>();
        Set<ConstraintViolation<?>> violations = ex.getConstraintViolations();
        
        for (ConstraintViolation<?> violation : violations) {
            errors.put(violation.getPropertyPath().toString(), violation.getMessage());
        }
        
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
    }
}
