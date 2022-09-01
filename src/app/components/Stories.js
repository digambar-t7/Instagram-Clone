import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FriendContext from '../context/Friend/FriendContext';
import '../css/Stories.css';

const Stories = (props) => {

    const friendsContext = useContext(FriendContext)
    const { friends, setFriends, getFriends } = friendsContext

    useEffect(() => {
        setFriends([])
        getFriends(props.username, "followings")
    }, [])

    useEffect(() => {
        console.log("stories page : friends loaded")
    }, [friends])


    return (
        <div id='Stories' >
            {
                friends.map((friend) => {
                    return <div key={friend.username}>
                        <Link to={`/profile/${friend.username}`}>
                            {
                                friend.profilePic === "bnVsbA=="
                                && <img src={require('../images/heart.png')} alt='dp' />
                                || <img src={`data:image/png;base64,${friend.profilePic}`} alt='dp' />
                            }
                            <p>{friend.username}</p>
                        </Link>
                    </div>
                })
            }
            {/* <div>
                <img src={require('../images/heart.png')} />
                <p>kali</p>
            </div> */}

        </div >
    )
}

export default Stories;
