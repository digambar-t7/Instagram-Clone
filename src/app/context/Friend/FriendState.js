import React, { useState, useContext } from 'react'
import UserContext from '../User/UserContext';
import FriendContext from './FriendContext';

const FriendState = (props) => {

    const userContext = useContext(UserContext);
    const { user, getUserByToken } = userContext;

    const [friends, setFriends] = useState([])
    const [followings, setFollowings] = useState([])

    const host = 'http://localhost:8080/api/v1/friends';

    // POST : Add friend
    const addFriend = async (friendName) => {
        const response = await fetch(`${host}/addfriend/${friendName}`, {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('insta-user-token')
            }
        })
        const json = await response.json()
        console.log(json)
        // getUserByToken()
    }

    // GET : get followers
    const getFriends = async (username, type) => {
        // type : followers/followings
        const response = await fetch(`${host}/get${type}/${username}`, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('insta-user-token')
            }
        })
        const json = await response.json()
        setFriends(json)
    }

    // GET : get followings
    const getFollowings = async (username) => {
        const response = await fetch(`${host}/getfollowings/${username}`, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('insta-user-token')
            }
        })
        const json = await response.json()
        setFollowings(json)
    }


    return (
        <FriendContext.Provider value={{ friends, setFriends, followings, addFriend, getFriends, getFollowings }}>
            {props.children}
        </FriendContext.Provider>
    )
}

export default FriendState;