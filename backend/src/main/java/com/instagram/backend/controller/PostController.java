package com.instagram.backend.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.instagram.backend.entity.MyUserDetails;
import com.instagram.backend.entity.Post;
import com.instagram.backend.service.PostService;

@RestController
@RequestMapping("api/v1/post")
public class PostController {

    private PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    // @GetMapping
    // public String test(@AuthenticationPrincipal MyUserDetails loggedUser) {
    // return loggedUser.getUsername();
    // }

    @GetMapping
    public ResponseEntity<List<Post>> getPostsByUser(@AuthenticationPrincipal MyUserDetails loggedUser) {
        List<Post> list = this.postService.getPostsByUser(loggedUser);
        return ResponseEntity.ok(list);
    }

    @PostMapping("add")
    public ResponseEntity<String> addPost(@AuthenticationPrincipal MyUserDetails loggedUser,
            @RequestParam("file") MultipartFile file, @RequestParam("postData") String postData) throws Exception {
        this.postService.addPost(loggedUser, file, postData);
        return ResponseEntity.ok("Successfully added a new Post");
    }

}
