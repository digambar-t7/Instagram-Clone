package com.instagram.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.instagram.backend.entity.Friend;

@Repository
public interface FriendsRepository extends JpaRepository<Friend, Integer> {

    Optional<Friend> getByFriendName(String friendUsername);

    Friend findByFriendName(String friendUsername);

}
