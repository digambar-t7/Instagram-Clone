package com.instagram.backend.entity;

import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String location;
    private int likes;
    private String caption;
    // Post::Child , since it is ManyToOne
    // JsonBackReference not serializes the property hence JsonProperty() is used to
    // add it explicitly to the response body
    @JsonBackReference
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private User owner;
    private LocalDateTime timestamp;

    @Lob
    private byte[] picture;

    public Post(String location, String caption) {
        this.location = location;
        this.caption = caption;
    }

    // this will add another property to the response
    @JsonProperty
    public String getUserId() {
        return owner == null ? null : owner.getUsername();
    }

    @Override
    public String toString() {
        return "Post [caption=" + caption + ", id=" + id + "]";
    }

}
