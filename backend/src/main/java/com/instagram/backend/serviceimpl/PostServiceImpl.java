package com.instagram.backend.serviceimpl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.instagram.backend.entity.MyUserDetails;
import com.instagram.backend.entity.Post;
import com.instagram.backend.entity.User;
import com.instagram.backend.exception.CurrentUserUnauthorizedException;
import com.instagram.backend.repository.PostRepository;
import com.instagram.backend.repository.UserRepository;
import com.instagram.backend.service.PostService;

@Service
public class PostServiceImpl implements PostService {

    private PostRepository postRepository;
    private UserRepository userRepository;

    public PostServiceImpl(PostRepository postRepository, UserRepository userRepository) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
    }

    @Override
    public void addPost(MyUserDetails loggedUser, MultipartFile file, String postData) throws Exception {
        Post newPost = new ObjectMapper().readValue(postData, Post.class);
        newPost.setPicture(file.getBytes());
        newPost.setTimestamp(LocalDateTime.now());
        User owner = loggedUser.getUser();
        newPost.setOwner(owner);
        this.postRepository.save(newPost);
    }

    @Override
    public List<Post> getPostsByUser(String username, MyUserDetails loggedUser) {
        Optional<User> userOpt = this.userRepository.findById(username);
        if (userOpt.isEmpty()) {
            return null;
        }
        return userOpt.get().getPosts();
        // return this.postRepository.findAllByOwnerUsername(username);
    }

    @Override
    public boolean deletePost(int postId, MyUserDetails loggedUser) throws CurrentUserUnauthorizedException {
        Optional<Post> postOpt = this.postRepository.findById(postId);
        if (postOpt.isEmpty()) {
            return false;
        }
        Post post = postOpt.get();
        if (!post.getOwner().getUsername().equals(loggedUser.getUsername())) {
            throw new CurrentUserUnauthorizedException("You are not authorized to delete this post");
        }
        this.postRepository.deleteById(postId);
        return true;
    }

    @Override
    public List<Post> getAllPosts() {
        return this.postRepository.findAll();
    }

}
