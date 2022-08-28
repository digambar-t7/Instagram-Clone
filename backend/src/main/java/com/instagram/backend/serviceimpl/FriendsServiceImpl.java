package com.instagram.backend.serviceimpl;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import org.springframework.stereotype.Service;

import com.instagram.backend.entity.Friend;
import com.instagram.backend.entity.MyUserDetails;
import com.instagram.backend.entity.User;
import com.instagram.backend.exception.AlreadyAFriendException;
import com.instagram.backend.exception.UserNotFoundException;
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

    @Override
    public String addFriend(String friendUsername, MyUserDetails loggedUserDetails) throws AlreadyAFriendException {

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
                throw new AlreadyAFriendException("You are already friends with " + friendUsername);
            }
        }

        user.getFriends().add(friend);
        user.setFriends(user.getFriends());
        user.setCountOfFollowing(user.getFriends().size());
        this.userRepository.save(user);

        User user2 = this.userRepository.findByUsername(friendUsername);
        user2.setCountOfFollowers(friend.getUsers().size() + 1);
        this.userRepository.save(user2);

        return "Successfully! added friend";
    }

    @Override
    public Set<User> getFollowers(String username, MyUserDetails loggedUserDetails) throws UserNotFoundException {
        Friend friend = this.friendsRepository.getByFriendName(username)
                .orElseThrow(() -> new UserNotFoundException("Failed! Requested User not found."));
        return friend.getUsers();
    }

    @Override
    public Set<User> getFollowings(String username, MyUserDetails loggedUserDetails) throws UserNotFoundException {
        User user = this.userRepository.findById(username)
                .orElseThrow(() -> new UserNotFoundException("Failed! Requested User not found."));
        Set<User> followings = new HashSet<>();
        for (Friend friend : user.getFriends()) {
            User temp = this.userRepository.findByUsername(friend.getFriendName());
            followings.add(temp);
        }
        return followings;
    }

}
