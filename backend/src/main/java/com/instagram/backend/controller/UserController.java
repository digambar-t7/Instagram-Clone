package com.instagram.backend.controller;

import java.io.IOException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.instagram.backend.entity.User;
import com.instagram.backend.service.UserService;

@RestController
@RequestMapping("api/v1/user")
public class UserController {

    UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("register")
    public ResponseEntity<User> registerNewUser(@RequestParam("profilePic") MultipartFile profilePic,
            @RequestParam("userData") String userData)
            throws IOException {
        System.out.println("user : " + userData);
        System.out.println("profilePic" + profilePic);
        User newUser = this.userService.registerNewUser(profilePic, userData);
        return ResponseEntity.status(HttpStatus.CREATED).body(newUser);
    }
}
