package com.instagram.backend.entity;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Friend {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String username;

    @ManyToMany
    private Set<User> users;

    public Friend() {
        super();
    }

    public Friend(String username) {
        this.username = username;
    }

    public Friend(String username, Set<User> users) {
        this.username = username;
        this.users = users;
    }

    public Friend(int id, String username, Set<User> users) {
        this.id = id;
        this.username = username;
        this.users = users;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }

}
