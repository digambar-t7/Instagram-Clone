package com.instagram.backend.serviceimpl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.method.P;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.instagram.backend.entity.MyUserDetails;
import com.instagram.backend.entity.Post;
import com.instagram.backend.entity.User;
import com.instagram.backend.exception.CurrentUserUnauthorizedException;
import com.instagram.backend.exception.PostNotFoundException;
import com.instagram.backend.repository.PostRepository;
import com.instagram.backend.repository.UserRepository;
import com.instagram.backend.service.PostService;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository postRepository;
    @Autowired
    private UserRepository userRepository;

    @Override
    public void addPost(MyUserDetails loggedUser, MultipartFile file, String postData) throws Exception {
        Post newPost = new ObjectMapper().readValue(postData, Post.class);
        newPost.setTimestamp(LocalDateTime.now());
        newPost.setPicture(file.getBytes());
        System.out.println(file.getBytes());
        User user = loggedUser.getUser();
        newPost.setOwner(user);
        this.postRepository.save(newPost);
        user.setCountOfPosts(user.getPosts().size() + 1);
        this.userRepository.save(user);
    }

    @Override
    public List<Post> getPostsByUser(String username, MyUserDetails loggedUser) {
        // loggedUser -> to check if he is friend of targetUser (privateUser check)
        Optional<User> userOpt = this.userRepository.findById(username);
        if (userOpt.isEmpty()) {
            return null;
        }
        Set<Post> set = new HashSet<>();
        List<Post> list = new ArrayList<>();
        for (Post post : userOpt.get().getPosts()) {
            if (set.add(post)) {
                list.add(post);
            }
        }
        return list;
        // return this.postRepository.findAllByOwnerUsername(username);
    }

    @Override
    public boolean deletePost(int postId, MyUserDetails loggedUser) throws CurrentUserUnauthorizedException {
        // Optional<Post> postOpt = this.postRepository.findById(postId);
        // if (postOpt.isEmpty()) {
        // return false;
        // }
        // Post post = postOpt.get();
        // User user = loggedUser.getUser();
        // if (!post.getOwner().getUsername().equals(user.getUsername())) {
        // throw new CurrentUserUnauthorizedException("You are not authorized to delete
        // this post");
        // }
        // user.setCountOfPosts(user.getPosts().size());
        // this.userRepository.save(user);

        User user = loggedUser.getUser();
        List<Post> list = user.getPosts();
        System.out.println(list);
        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).getId() == postId) {
                list.remove(i);
                break;
            }
        }
        System.out.println(list);
        user.setPosts(list);
        System.out.println(user.getPosts());
        this.userRepository.save(user);
        this.postRepository.deleteById(postId);
        return true;
    }

    @Override
    public List<Post> getAllPosts() {
        return this.postRepository.findAll();
    }

    @Override
    public void likeAPost(int postId) throws PostNotFoundException {
        Post post = this.postRepository.findById(postId)
                .orElseThrow(() -> new PostNotFoundException("Requested Post not found"));
        post.setLikes(post.getLikes() + 1);
        this.postRepository.save(post);
    }

    @Override
    public void unlikeAPost(int postId) throws PostNotFoundException {
        Post post = this.postRepository.findById(postId)
                .orElseThrow(() -> new PostNotFoundException("Requested Post not found"));
        post.setLikes(post.getLikes() - 1);
        this.postRepository.save(post);
    }

}
