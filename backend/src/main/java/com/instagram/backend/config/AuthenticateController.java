package com.instagram.backend.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.instagram.backend.entity.JwtRequest;
import com.instagram.backend.entity.JwtResponse;
import com.instagram.backend.entity.MyUserDetails;
import com.instagram.backend.entity.User;
import com.instagram.backend.serviceimpl.MyUserDetailsServiceImpl;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AuthenticateController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;
    private MyUserDetailsServiceImpl myUserDetailsServiceImpl;

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/test")
    public ResponseEntity<User> getUserFromToken(@AuthenticationPrincipal MyUserDetails loggedUserDetails) {
        System.out.println("-----------------------------------------------");
        loggedUserDetails.getUser().setPosts(null);
        System.out.println(loggedUserDetails.getUser());
        System.out.println("-----------------------------------------------");
        return ResponseEntity.ok(loggedUserDetails.getUser());
    }

    @PostMapping("/generate-token")
    public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) {
        try {
            this.authenticate(jwtRequest.getUsername(), jwtRequest.getPassword());
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        UserDetails userDetails = this.userDetailsService.loadUserByUsername(jwtRequest.getUsername());
        String token = this.jwtUtil.generateToken(userDetails);
        MyUserDetails myUserDetails = (MyUserDetails) userDetails;
        return ResponseEntity.ok(new JwtResponse(myUserDetails.getUser(), token));
    }

    private void authenticate(String username, String password) {
        try {
            this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            System.out.println("User is Disabled : " + e.getMessage());
        } catch (BadCredentialsException e) {
            System.out.println("Bad credentials provided : " + e.getMessage());
        }
    }

}
