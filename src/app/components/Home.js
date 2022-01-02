import React from 'react';
import '../css/Home.css';
import PostsWindow from './PostsWindow';
import Stories from './Stories';
import Suggestions from './Suggestions';

const Home = () => {
    return (
        <div id='Home'>
            <div className='inner'>

                <div className='left' >
                    <Stories />

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
