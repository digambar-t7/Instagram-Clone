package com.instagram.backend.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.instagram.backend.entity.MyUserDetails;
import com.instagram.backend.entity.Post;
import com.instagram.backend.exception.CurrentUserUnauthorizedException;

public interface PostService {

    void addPost(MyUserDetails loggedUser, MultipartFile file, String postData) throws Exception;

    List<Post> getPostsByUser(String username, MyUserDetails loggedUser);

    boolean deletePost(int postId, MyUserDetails loggedUser) throws CurrentUserUnauthorizedException;

    List<Post> getAllPosts();

}
