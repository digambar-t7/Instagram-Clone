package com.instagram.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.instagram.backend.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

}
