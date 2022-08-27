package com.instagram.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.instagram.backend.entity.MyUserDetails;

@RestController
@RequestMapping("/api/v1/friends")
public class FriendsController {

}
