import React, { useContext, useEffect } from 'react';
import UserContext from '../context/User/UserContext';
import '../css/Home.css';
import PostsWindow from './PostsWindow';
import Stories from './Stories';
import Suggestions from './Suggestions';

const Home = () => {

    const userContext = useContext(UserContext)
    const { getUserByToken } = userContext


    return (
        <div id='Home'>
            <div className='inner'>

                <div className='left' >
                    <div className='stories-bg bg'>
                        <Stories />
                    </div>

                    {/* for demo purpose only */}
                    {/* <NavProfileBlock /> */}
                    {/* plz delete later */}

                    {/* PostsWindow :: consists of all the posts */}
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
