package com.instagram.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.instagram.backend.entity.MyUserDetails;
import com.instagram.backend.service.FriendsService;

@RestController
@RequestMapping("/api/v1/friends")
public class FriendsController {

    private FriendsService friendsService;

    public FriendsController(FriendsService friendsService) {
        this.friendsService = friendsService;
    }

    @GetMapping("/addfriend/{friendUsername}")
    public ResponseEntity<?> addFriend(@AuthenticationPrincipal MyUserDetails loggedUserDetails,
            @PathVariable("friendUsername") String friendUsername) {
        String msg = this.friendsService.addFriend(friendUsername, loggedUserDetails);
        return ResponseEntity.ok(msg);
    }

}
