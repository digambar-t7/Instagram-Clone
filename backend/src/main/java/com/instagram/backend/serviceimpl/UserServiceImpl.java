package com.instagram.backend.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.instagram.backend.entity.User;
import com.instagram.backend.repository.UserRepository;
import com.instagram.backend.service.UserService;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public User registerNewUser(MultipartFile profilePic, String userData) {
        try {
            // converting jsonString into objOfSpecifiedType
            User newUser = new ObjectMapper().readValue(userData, User.class);
            newUser.setProfilePic(profilePic.getBytes());
            // saving the encrypted password
            newUser.setPassword(this.bCryptPasswordEncoder.encode(newUser.getPassword()));
            newUser.setRole("ROLE_USER");
            this.userRepository.save(newUser);
            return newUser;
        } catch (Exception e) {
            e.printStackTrace();
            throw new IllegalStateException(e.getMessage());
        }
    }

}
