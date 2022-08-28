package com.instagram.backend.service;

import com.instagram.backend.entity.MyUserDetails;

public interface FriendsService {

    String addFriend(String friendUsername, MyUserDetails loggedUserDetails);

}
