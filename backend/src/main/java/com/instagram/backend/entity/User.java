package com.instagram.backend.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class User {
    @Id
    private String username;
    private String password;
    private String role;
    private String firstName;
    private String lastName;
    private String email;
    private String bio;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date dob;
    private int countOfPosts;
    private int countOfFollowers;
    private int countOfFollowing;
    @Lob
    private byte[] profilePic;

    @JsonBackReference
    @OneToMany(mappedBy = "owner")
    private List<Post> posts;
}
