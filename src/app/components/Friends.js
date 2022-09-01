import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import FriendContext from '../context/Friend/FriendContext';
import "../css/Friends.css";

const Friends = () => {
    const params = useParams();

    const friendsContext = useContext(FriendContext);
    const { friends, getFriends } = friendsContext;

    useEffect(() => {
        getFriends(params.accountId, params.type);
    }, [])

    return (
        <div id='Friends'>
            <div className='heading'>
                #{params.type.toLocaleUpperCase()}
            </div>
            <div className='container'>
                {friends.map((friend) => {
                    return <div className='block'>
                        <Link to={`/profile/${friend.username}`}>
                            <div className='inner'>{
                                friend.profilePic === "bnVsbA=="
                                && <img src={require('../images/heart.png')} alt='dp' />
                                || <img src={`data:image/png;base64,${friend.profilePic}`} alt='dp' />
                            }
                                <div className='details'>
                                    <span style={{ color: "black" }}>{friend.username}</span>
                                    <span>{friend.firstName} {friend.lastName}</span>
                                </div>
                            </div>
                        </Link>
                        <button className='blue btn'> Remove </button>
                    </div>
                })}

                {/* <div className='block'>
                    <div className='inner'>
                        <img src={require('../images/heart.png')} alt='dp' />
                        <div className='details'>
                            <span style={{ color: "black" }}>digambar_t7</span>
                            <span>Digambar Tupurwadi</span>
                        </div>
                    </div>
                    <button className='blue btn'> Remove </button>
                </div> */}

            </div>
        </div>
    )
}

export default Friends;