package com.instagram.backend.controller;

import java.util.Set;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.instagram.backend.entity.MyUserDetails;
import com.instagram.backend.entity.User;
import com.instagram.backend.exception.AlreadyAFriendException;
import com.instagram.backend.exception.UserNotFoundException;
import com.instagram.backend.service.FriendsService;

@RestController
@RequestMapping("/api/v1/friends")
@CrossOrigin(origins = "http://localhost:3000")
public class FriendsController {

    private FriendsService friendsService;

    public FriendsController(FriendsService friendsService) {
        this.friendsService = friendsService;
    }

    @PostMapping("/addfriend/{friendUsername}")
    public ResponseEntity<?> addFriend(@AuthenticationPrincipal MyUserDetails loggedUserDetails,
            @PathVariable("friendUsername") String friendUsername) throws AlreadyAFriendException {
        String msg = this.friendsService.addFriend(friendUsername, loggedUserDetails);
        return ResponseEntity.ok(msg);
    }

    @GetMapping("/getfollowings/{username}")
    public ResponseEntity<Set<User>> getFollowings(@AuthenticationPrincipal MyUserDetails loggedUserDetails,
            @PathVariable("username") String username) throws UserNotFoundException {
        return ResponseEntity.ok(this.friendsService.getFollowings(username, loggedUserDetails));
    }

    @GetMapping("/getfollowers/{username}")
    public ResponseEntity<Set<User>> getFollowers(@AuthenticationPrincipal MyUserDetails loggedUserDetails,
            @PathVariable("username") String username) throws UserNotFoundException {
        return ResponseEntity.ok(this.friendsService.getFollowers(username, loggedUserDetails));
    }

}
