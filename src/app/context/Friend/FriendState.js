import React, { useContext } from 'react'
import UserContext from '../User/UserContext';
import './FriendContext'

const FriendState = (props) => {

    const userContext = useContext(UserContext);
    const { user, getUserByToken } = userContext;

    const [followers, setFollowers] = useState([])
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
        getUserByToken()
    }

    // GET : get followers
    const getFollowers = async (username) => {
        const response = await fetch(`${host}/getfollowers/${username}`, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('insta-user-token')
            }
        })
        const json = await response.json()
        setFollowers(json)
    }

    // GET : get followings
    const getFollowings = async (username) => {
        const response = await fetch(`${host}/getfollowers/${username}`, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('insta-user-token')
            }
        })
        const json = await response.json()
        setFollowings(json)
    }


    return (
        <FriendContext.Provider value={{ followers, followings, addFriend, getFollowers, getFollowings }}>
            {props.children}
        </FriendContext.Provider>
    )
}

export default FriendState;