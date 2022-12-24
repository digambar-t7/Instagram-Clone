import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../context/User/UserContext';
import '../css/Home.css';
import PostsWindow from './PostsWindow';
import Stories from './Stories';
import Suggestions from './Suggestions';

const Home = () => {
    const userContext = useContext(UserContext)
    const { user, getUserByToken } = userContext

    useEffect(() => {
        setTimeout(() => {
            getUserByToken(localStorage.getItem('insta-user-token'))
        }, 1000);
    }, [])

    useEffect(() => {
        console.log("home")
        console.log(user)
    }, [user])


    return (
        <div id='Home'>
            <div className='inner'>

                <div className='left' >
                    <div className='stories-bg bg'>
                        {user && <Stories username={user.username} />}
                    </div>
                    <PostsWindow />
                </div>

                <div className='right' >
                    <Suggestions />
                </div>

            </div>
        </div>
    )
}

export default Home;
