package com.instagram.backend.service;

import org.springframework.web.multipart.MultipartFile;

import com.instagram.backend.entity.MyUserDetails;
import com.instagram.backend.entity.User;

public interface UserService {

    User registerNewUser(MultipartFile profilePic, String userData);

    User getUserByUsername(String username);

    User getUserByToken(MyUserDetails loggedUser);

}
