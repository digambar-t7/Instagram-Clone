package com.instagram.backend.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String location;
    private int likes;
    private String caption;
    private LocalDateTime timestamp;

    @Lob
    private byte[] picture;

    @JsonBackReference
    @ManyToOne
    private User owner;

    public Post(String location, String caption, byte[] picture) {
        this.location = location;
        this.caption = caption;
        this.picture = picture;
    }

}
