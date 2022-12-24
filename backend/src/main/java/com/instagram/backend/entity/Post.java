package com.instagram.backend.entity;

import java.time.LocalDateTime;
import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String location;
    private int likes;
    private String caption;
    // Post::Child , since it is ManyToOne
    // JsonBackReference not serializes the property hence JsonProperty() is used to
    // add it explicitly to the response body
    // @JsonBackReference
    @JsonIgnore
    @ManyToOne
    private User owner;
    private LocalDateTime timestamp;

    @Lob
    private byte[] picture;

    public Post(String location, String caption) {
        this.location = location;
        this.caption = caption;
    }

    public Post(String location, int likes, String caption, User owner, LocalDateTime timestamp, byte[] picture) {
        this.location = location;
        this.caption = caption;
        this.timestamp = timestamp;
        this.picture = picture;
        this.likes = likes;
        this.owner = owner;
    }

    // this will add another property to the response
    @JsonProperty
    public String getUserId() {
        return owner == null ? null : owner.getUsername();
    }

    @Override
    public String toString() {
        return "Post [caption=" + caption + ", id=" + id + ", likes=" + likes + ", location=" + location + ", owner="
                + owner + ", picture=" + Arrays.toString(picture).substring(0, 10) + ", timestamp=" + timestamp + "]";
    }

    // @Override
    // public String toString() {
    // return "Post [caption=" + caption + ", id=" + id + "]";
    // }

}
