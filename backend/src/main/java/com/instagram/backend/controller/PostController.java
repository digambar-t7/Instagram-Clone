package com.instagram.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.instagram.backend.entity.MyUserDetails;
import com.instagram.backend.entity.Post;
import com.instagram.backend.exception.CurrentUserUnauthorizedException;
import com.instagram.backend.exception.PostNotFoundException;
import com.instagram.backend.service.PostService;

@RestController
@RequestMapping("api/v1/post")
// To enable CORS
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {

    private PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("getallposts")
    public ResponseEntity<List<Post>> getAllPosts() {
        return ResponseEntity.ok(this.postService.getAllPosts());
    }

    @GetMapping("getpostsfrom/{username}")
    public ResponseEntity<List<Post>> getPostsByUser(@AuthenticationPrincipal MyUserDetails loggedUser,
            @PathVariable("username") String username) {
        List<Post> list = this.postService.getPostsByUser(username, loggedUser);
        return ResponseEntity.ok(list);
    }

    @PostMapping("add")
    public ResponseEntity<String> addPost(@AuthenticationPrincipal MyUserDetails loggedUser,
            @RequestParam("file") MultipartFile file, @RequestParam("postData") String postData) throws Exception {
        this.postService.addPost(loggedUser, file, postData);
        return ResponseEntity.ok("Successfully added a new Post");
    }

    @DeleteMapping("delete/{postId}")
    public ResponseEntity<?> deletePost(@AuthenticationPrincipal MyUserDetails loggedUser,
            @PathVariable("postId") int postId) throws CurrentUserUnauthorizedException {
        boolean status = this.postService.deletePost(postId, loggedUser);
        if (status) {
            return ResponseEntity.ok("Successfull!!! Post deletion.");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("UNSUCCESSFULL!!! Post deletion");
    }

    @PutMapping("like/{postId}")
    public void likeAPost(@PathVariable("postId") int postId) throws PostNotFoundException {
        this.postService.likeAPost(postId);
    }

    @PutMapping("unlike/{postId}")
    public void unlikeAPost(@PathVariable("postId") int postId) throws PostNotFoundException {
        this.postService.unlikeAPost(postId);
    }

}
