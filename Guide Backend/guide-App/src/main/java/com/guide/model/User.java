//package com.guide.model;
//
//import java.util.Collection;
//import java.util.HashSet;
//import java.util.Objects;
//import java.util.Set;
//
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//
//import jakarta.persistence.CascadeType;
//import jakarta.persistence.Entity;
//import jakarta.persistence.FetchType;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.OneToMany;
//import jakarta.persistence.Table;
//import jakarta.validation.constraints.Email;
//import jakarta.validation.constraints.NotBlank;
//import jakarta.validation.constraints.Pattern;
//import jakarta.validation.constraints.Size;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.EqualsAndHashCode;
//import lombok.NoArgsConstructor;
//
//@Data
//@Entity
//@Table(name = "users")
//@NoArgsConstructor
//@AllArgsConstructor
//@EqualsAndHashCode(exclude = "userRoles")
//
//public class User implements UserDetails {
//
////	@Id
////	@GeneratedValue(strategy = GenerationType.IDENTITY)
////	private long id;
////	//@Column(nullable = false)
////	private String username;
////	private String password;
////	private String firstName;
////	private String lastName;
////	private String email;
////	private String phone;
////	private boolean enable=true;
//	
//	    @Id
//	    @GeneratedValue(strategy = GenerationType.IDENTITY)
//	    private long id;
//
//	    @NotBlank(message = "Username cannot be blank")
//	    @Size(min = 3, max = 50, message = "Username must be between 3 and 50 characters")
//	    private String username;
//
//	    @NotBlank(message = "Password cannot be blank")
//	    @Size(min = 8, max = 20, message = "Password must be between 8 and 20 characters")
//	    @Pattern(
//	        regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@#$%^&+=]).+$",
//	        message = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
//	    )
//	    private String password;
//
//	    @NotBlank(message = "First name cannot be blank")
//	    @Size(max = 50, message = "First name must not exceed 50 characters")
//	    @Pattern(regexp = "^[A-Za-z]+$", message = "First name must contain only alphabets")
//	    private String firstName;
//
//	    @NotBlank(message = "Last name cannot be blank")
//	    @Size(max = 50, message = "Last name must not exceed 50 characters")
//	    @Pattern(regexp = "^[A-Za-z]+$", message = "Last name must contain only alphabets")
//	    private String lastName;
//
//	  
//	    @NotBlank(message = "Email cannot be blank")
//	    @Email(message = "Email must be a valid email address")
//	    @Size(max = 100, message = "Email must not exceed 100 characters")
//	    private String email;
//
//	    @NotBlank(message = "Phone number cannot be blank")
//	    @Pattern(regexp = "^[0-9]{10}$", message = "Phone number must be exactly 10 digits")
//	    private String phone;
//
//	    private boolean enable = true;
//	private String profile;
//	
//	
//	//  user many role
//	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "user")
//	@JsonIgnore
//	private Set<UserRole> userRoles = new HashSet<>();
//
//
//	@Override
//	public Collection<? extends GrantedAuthority> getAuthorities() {
//		// TODO Auto-generated method stub
//		
//		Set<Authority> ar=new HashSet<>();
//		
//		this.userRoles.forEach(userRoles->{
//			ar.add(new Authority(userRoles.getRole().getRoleName()));
//		});
//		return ar;
//	}
//
//
//	@Override
//	public boolean isAccountNonExpired() {
//		// TODO Auto-generated method stub
//		return true;
//	}
//
//
//	@Override
//	public boolean isAccountNonLocked() {
//		// TODO Auto-generated method stub
//		return true;
//	}
//
//
//	@Override
//	public boolean isCredentialsNonExpired() {
//		// TODO Auto-generated method stub
//		return true;
//	}
//
//
//	@Override
//	public boolean isEnabled() {
//		// TODO Auto-generated method stub
//		return true;
//	}
//
//	
//	
//
//	
//}

package com.guide.model;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

import lombok.*;

@Data
@Entity
@Table(name = "users")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(exclude = "userRoles")
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank(message = "Username cannot be blank")
    @Size(min = 3, max = 50, message = "Username must be between 3 and 50 characters")
    private String username;

    @NotBlank(message = "Password cannot be blank")
    //@Size(min = 8, max = 20, message = "Password must be between 8 and 20 characters")
    @Pattern(
        regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@#$%^&+=]).+$",
        message = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    private String password;

    @NotBlank(message = "First name cannot be blank")
    @Size(max = 50, message = "First name must not exceed 50 characters")
    @Pattern(regexp = "^[A-Za-z]+$", message = "First name must contain only alphabets")
    private String firstName;

    @NotBlank(message = "Last name cannot be blank")
    @Size(max = 50, message = "Last name must not exceed 50 characters")
    @Pattern(regexp = "^[A-Za-z]+$", message = "Last name must contain only alphabets")
    private String lastName;

    @NotBlank(message = "Email cannot be blank")
    @Email(message = "Invalid email format")
    @Size(max = 100, message = "Email must not exceed 100 characters")
    private String email;

    @NotBlank(message = "Phone number cannot be blank")
    @Pattern(regexp = "^[0-9]{10}$", message = "Phone number Format is not valid Please Enter valid Phone Number")
    private String phone;

    private boolean enable = true;
    
    private boolean emailVerified=false;
    private String emailToken;

    private String profile;

    // User-Roles Relationship
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "user")
    @JsonIgnore
    private Set<UserRole> userRoles = new HashSet<>();

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Set<Authority> authorities = new HashSet<>();
        this.userRoles.forEach(userRole -> 
            authorities.add(new Authority(userRole.getRole().getRoleName()))
        );
        return authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return this.enable;
    }
}

