package com.instagram.backend.service;

import java.util.Set;

import com.instagram.backend.entity.MyUserDetails;
import com.instagram.backend.entity.User;
import com.instagram.backend.exception.AlreadyAFriendException;
import com.instagram.backend.exception.UserNotFoundException;

public interface FriendsService {

    String addFriend(String friendUsername, MyUserDetails loggedUserDetails) throws AlreadyAFriendException;

    Set<User> getFollowers(String username, MyUserDetails loggedUserDetails) throws UserNotFoundException;

    Set<User> getFollowings(String username, MyUserDetails loggedUserDetails) throws UserNotFoundException;

}
