import React from 'react';
import '../css/Home.css';
import NavProfileBlock from './NavProfileBlock';
import Notifications from './Notifications';
import PostsWindow from './PostsWindow';
import Stories from './Stories';
import Suggestions from './Suggestions';

const Home = () => {
    return (
        <div id='Home'>
            <div className='inner'>

                <div className='left' >
                    <Stories />

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
