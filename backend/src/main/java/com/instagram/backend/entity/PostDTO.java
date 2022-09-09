package com.instagram.backend.entity;

public class PostDTO {
    public String location;
    public String caption;

    public PostDTO() {
    }

    public PostDTO(String location, String caption) {
        this.location = location;
        this.caption = caption;
    }

}
