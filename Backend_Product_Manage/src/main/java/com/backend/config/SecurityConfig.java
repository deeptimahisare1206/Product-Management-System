package com.backend.config;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;



@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Autowired
	private UserDetailsService userDetailsService;
	
	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity https) throws Exception
	{
		return https
				.csrf(AbstractHttpConfigurer::disable)
				.cors(org.springframework.security.config.Customizer.withDefaults())
				.authorizeHttpRequests(auth -> auth
						.requestMatchers("/login").permitAll()
						.requestMatchers("/register").permitAll().anyRequest().authenticated())
				.httpBasic(Customizer.withDefaults())
				.build();
				
	}
			
	
	
	
	@Bean
	public AuthenticationProvider authenticationProvider()
	{
		DaoAuthenticationProvider provider=new DaoAuthenticationProvider();
		provider.setPasswordEncoder(bCryptPasswordEncoder());
		provider.setUserDetailsService(userDetailsService);
		return provider;
	}
	
	
//	@Bean
//	CorsConfigurationSource corsConfigurationSource() {
//		CorsConfiguration configuration = new CorsConfiguration();
//		configuration.setAllowedOrigins(List.of("http://localhost:5173"));
//		configuration.setAllowedMethods(List.of("GET","POST","PUT","DELETE"));
//		configuration.setAllowCredentials(true);
//		configuration.addAllowedHeader("*");
//		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//		source.registerCorsConfiguration("/**",configuration);
//		return (CorsConfigurationSource) source;
//	}
}
