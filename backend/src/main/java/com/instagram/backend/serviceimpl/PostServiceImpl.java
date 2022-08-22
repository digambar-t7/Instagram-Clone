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
import com.instagram.backend.service.PostService;

@Service
public class PostServiceImpl implements PostService {

    private PostRepository postRepository;

    public PostServiceImpl(PostRepository postRepository) {
        this.postRepository = postRepository;
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
    public List<Post> getPostsByUser(MyUserDetails loggedUser) {
        return this.postRepository.findAllByOwnerUsername(loggedUser.getUsername());
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

}
