package com.instagram.backend.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Friend {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String friendName;

    @JsonIgnore
    @ManyToMany(mappedBy = "friends", fetch = FetchType.LAZY)
    private Set<User> users = new HashSet<>();

    public Friend() {
        super();
    }

    public Friend(String username) {
        this.friendName = username;
    }

    public Friend(String username, Set<User> users) {
        this.friendName = username;
        this.users = users;
    }

    public Friend(int id, String username, Set<User> users) {
        this.id = id;
        this.friendName = username;
        this.users = users;
    }

    @Override
    public String toString() {
        return "Friend [" + friendName + "]";
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Friend other = (Friend) obj;
        if (friendName == null) {
            if (other.friendName != null)
                return false;
        } else if (!friendName.equals(other.friendName))
            return false;
        if (id != other.id)
            return false;
        return true;
    }

}
