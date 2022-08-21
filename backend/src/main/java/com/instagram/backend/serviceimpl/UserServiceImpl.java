package com.instagram.backend.serviceimpl;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.instagram.backend.entity.User;
import com.instagram.backend.repository.UserRepository;
import com.instagram.backend.service.UserService;

@Service
public class UserServiceImpl implements UserService {

    UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User registerNewUser(MultipartFile profilePic, String userData) {
        try {
            // converting string -> jsonObj -> User Obj
            User newUser = new ObjectMapper().readValue(userData, User.class);
            newUser.setProfilePic(profilePic.getBytes());
            this.userRepository.save(newUser);
            return newUser;
        } catch (Exception e) {
            e.printStackTrace();
            throw new IllegalStateException(e.getMessage());
        }
    }

}
