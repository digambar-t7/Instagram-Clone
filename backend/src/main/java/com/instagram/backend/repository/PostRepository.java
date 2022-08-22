package com.instagram.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.instagram.backend.entity.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Integer> {

    List<Post> findAllByOwnerUsername(String username);

}
