////package com.guide.config;
////
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.context.annotation.Bean;
////import org.springframework.context.annotation.Configuration;
////import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
////import org.springframework.security.config.annotation.web.builders.HttpSecurity;
////import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
////import org.springframework.security.core.userdetails.UserDetailsService;
////import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
////import org.springframework.security.crypto.password.PasswordEncoder;
////import org.springframework.security.web.SecurityFilterChain;
////
////import com.guide.service.impl.UserDetailsServiceImp;
////
////@EnableWebSecurity
////@Configuration
////
////public class MySecurityConfig  
////{
////@Autowired
////private UserDetailsServiceImp userDetailsServiceImp;
////
////@Bean
////public BCryptPasswordEncoder passwordEncoder() {
////return new BCryptPasswordEncoder();
////}
////@Bean
////public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
////
////http
////.csrf()
////.disable()
////.cors()
////.disable()
////.authorizeRequests()
////.requestMatchers("/generate-token","/create").permitAll()
////.anyRequest().authenticated()
////.and()
////.exceptionHandling()
////return http.build();
////}
////@Bean
////public DaoAuthenticationProvider daoAuthenticationProvider() {
////DaoAuthenticationProvider provider=new DaoAuthenticationProvider();
////provider.setUserDetailsService(this.userDetailsServiceImp);
////provider.setPasswordEncoder(passwordEncoder());
////return provider;
////}
////
////
////
////}
//
//package com.guide.config;
//
//import com.guide.service.impl.UserDetailsServiceImp;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
//import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.NoOpPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@EnableWebSecurity
//@Configuration
//@EnableMethodSecurity(prePostEnabled = true)
//public class MySecurityConfig {
//
//	@Autowired
//	private UserDetailsServiceImp userDetailsServiceImpl;
//
//	@Autowired
//	private JwtAuthenticationEntryPoint unauthorizedHandler;
//
//	@Autowired
//	private JwtAuthenticationFilter jwtAuthenticationFilter;
//
////	@Bean
////	public BCryptPasswordEncoder passwordEncoder() {
////		return new BCryptPasswordEncoder();
////	}
//	
//	@Bean
//	public PasswordEncoder passwordEncoder() {
//		return NoOpPasswordEncoder.getInstance();
//	}
//
//	@Bean
//	public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
//			throws Exception {
//		return authenticationConfiguration.getAuthenticationManager();
//	}
//
//	@Bean
//	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//		http.csrf(csrf -> csrf.disable()).cors(cors -> cors.disable())
//				.authorizeHttpRequests(auth -> auth.requestMatchers("/generate-token", "/user/").permitAll()
//						.requestMatchers(HttpMethod.OPTIONS).permitAll().anyRequest().authenticated())
//				.exceptionHandling((exception) -> exception.authenticationEntryPoint(unauthorizedHandler)
//						.accessDeniedPage("/error/accedd-denied"))
//				.sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
//
//		http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
//
//		return http.build();
//	}
////	@Bean
////	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
////	    http.csrf(csrf -> csrf.disable())
////	        .cors(cors -> cors.configure(WebMvcConfigurer.super::configure))
////	        .authorizeHttpRequests(auth -> auth
////	            .requestMatchers("/generate-token", "/user/").permitAll()
////	            .anyRequest().authenticated())
////	        .exceptionHandling(exception -> exception.authenticationEntryPoint(unauthorizedHandler))
////	        .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
////
////	    http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
////
////	    return http.build();
////	}
//
//
//	@Bean
//	public WebMvcConfigurer corsConfigurer() {
//		return new WebMvcConfigurer() {
//			@Override
//			public void addCorsMappings(CorsRegistry registry) {
//				registry.addMapping("/**").allowedMethods("*");
//			}
//		};
//	}
//
//}
//package com.exam.config;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//
//import com.exam.service.impl.UserDetailsServiceImp;
//
//@EnableWebSecurity
//@Configuration
//
//public class MySecurityConfig  
//{
//	@Autowired
//	private UserDetailsServiceImp userDetailsServiceImp;
//	
//	@Bean
//	public BCryptPasswordEncoder passwordEncoder() {
//		return new BCryptPasswordEncoder();
//	}
//	 @Bean
//	    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//	       
//		 http
//		     .csrf()
//		     .disable()
//		     .cors()
//		     .disable()
//		     .authorizeRequests()
//		     .requestMatchers("/generate-token","/create").permitAll()
//		     .anyRequest().authenticated()
//		     .and()
//		     .exceptionHandling()
//	        return http.build();
//	    }
//	 @Bean
//	 public DaoAuthenticationProvider daoAuthenticationProvider() {
//		 DaoAuthenticationProvider provider=new DaoAuthenticationProvider();
//		 provider.setUserDetailsService(this.userDetailsServiceImp);
//		 provider.setPasswordEncoder(passwordEncoder());
//		 return provider;
//	 }
//	 
//
//	
//}

package com.guide.config;

import com.guide.service.impl.UserDetailsServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@EnableWebSecurity
@Configuration
@EnableMethodSecurity(prePostEnabled = true)
public class MySecurityConfig  {

    @Autowired
    private UserDetailsServiceImp userDetailsServiceImpl;


    @Autowired
    private JwtAuthenticationEntryPoint unauthorizedHandler;

    @Autowired
    private JwtAuthenticationFilter jwtAuthenticationFilter;

//    @Bean
//    public BCryptPasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
    
    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
    	return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    
//    protected void configure(AuthenticationManagerBuilder auth)throws Exception {
//		auth.userDetailsService(this.userDetailsServiceImpl).passwordEncoder(passwordEncoder());
//	}

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .cors(cors->cors.disable()) 
                .authorizeHttpRequests(auth->
                	auth.requestMatchers("/generate-token", "/user/create","/auth/verify-email").permitAll()
                	.requestMatchers(HttpMethod.OPTIONS).permitAll()
                	.anyRequest().authenticated()
                )
                .exceptionHandling((exception)-> exception.authenticationEntryPoint(unauthorizedHandler).accessDeniedPage("/error/accedd-denied"))
                .sessionManagement(sess->sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
                
       http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedMethods("*");
            }
        };
    }



}


