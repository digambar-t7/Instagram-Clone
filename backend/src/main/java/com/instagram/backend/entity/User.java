package com.instagram.backend.entity;

import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.NoArgsConstructor;

@Entity
// @Data
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

    // User::Parent , since user consists of multiple posts bcoz OneToMany
    @JsonManagedReference
    @OneToMany(mappedBy = "owner", fetch = FetchType.EAGER)
    private List<Post> posts;

    @ManyToMany(mappedBy = "users", fetch = FetchType.EAGER)
    private Set<Friend> friends;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public int getCountOfPosts() {
        return countOfPosts;
    }

    public void setCountOfPosts(int countOfPosts) {
        this.countOfPosts = countOfPosts;
    }

    public int getCountOfFollowers() {
        return countOfFollowers;
    }

    public void setCountOfFollowers(int countOfFollowers) {
        this.countOfFollowers = countOfFollowers;
    }

    public int getCountOfFollowing() {
        return countOfFollowing;
    }

    public void setCountOfFollowing(int countOfFollowing) {
        this.countOfFollowing = countOfFollowing;
    }

    public byte[] getProfilePic() {
        return profilePic;
    }

    public void setProfilePic(byte[] profilePic) {
        this.profilePic = profilePic;
    }

    public List<Post> getPosts() {
        return posts;
    }

    public void setPosts(List<Post> posts) {
        this.posts = posts;
    }

}
