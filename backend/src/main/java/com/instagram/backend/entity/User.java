package com.instagram.backend.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class User {
    @Id
    private String username;
    private String password;
    private String bio;
    private Date dob;
    private int countOfPosts;
    private int countOfFollowers;
    private int countOfFollowing;
    @Lob
    private byte[] dp;
}
