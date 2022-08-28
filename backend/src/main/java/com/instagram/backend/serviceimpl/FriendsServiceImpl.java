package com.instagram.backend.serviceimpl;

import java.util.Optional;
import java.util.Set;

import org.springframework.stereotype.Service;

import com.instagram.backend.entity.Friend;
import com.instagram.backend.entity.MyUserDetails;
import com.instagram.backend.entity.User;
import com.instagram.backend.repository.FriendsRepository;
import com.instagram.backend.repository.UserRepository;
import com.instagram.backend.service.FriendsService;

@Service
public class FriendsServiceImpl implements FriendsService {

    private UserRepository userRepository;
    private FriendsRepository friendsRepository;

    public FriendsServiceImpl(UserRepository userRepository, FriendsRepository friendsRepository) {
        this.userRepository = userRepository;
        this.friendsRepository = friendsRepository;
    }

    public String addFriend2(String friendUsername, MyUserDetails loggedUserDetails) {
        User user = this.userRepository.findByUsername(loggedUserDetails.getUsername());
        Optional<Friend> friendOpt = this.friendsRepository.getByFriendName(friendUsername);
        Friend friend = null;
        System.out.println("---------------------------------------");
        if (friendOpt.isPresent()) {
            System.out.println("friend  opt used");
            friend = friendOpt.get();
        } else {
            System.out.println("new friend created");
            friend = new Friend(friendUsername);
        }
        // System.out.println(user.getFriends());
        // System.out.println(friend.getUsers());
        System.out.println("---------------------------------------");
        if (user.getFriends().contains(friend)) {
            return "Failed! already a friend";
        }
        user.getFriends().add(friend);
        friend.getUsers().add(user);
        // System.out.println(user.getFriends());
        // System.out.println(friend.getUsers());
        this.userRepository.save(user);
        this.friendsRepository.save(friend);
        return "Successfully! added friend";
    }

    @Override
    public String addFriend(String friendUsername, MyUserDetails loggedUserDetails) {

        User user = loggedUserDetails.getUser();
        Optional<Friend> friendOptional = this.friendsRepository.getByFriendName(friendUsername);
        Friend friend = null;

        if (friendOptional.isPresent()) {
            friend = friendOptional.get();
        } else {
            friend = new Friend(friendUsername);
        }

        // not working as per expectations
        Set<Friend> set = user.getFriends();
        if (set.contains(friend)) {
            return "Failed! Already a friend if-block";
        }

        for (Friend frnd : user.getFriends()) {
            if (frnd.equals(friend)) {
                return "Failed! Already a friend";
            }
        }

        user.getFriends().add(friend);
        user.setFriends(user.getFriends());
        this.userRepository.save(user);

        return "Successfully! added friend";
    }

}
