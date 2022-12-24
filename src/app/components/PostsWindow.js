import React, { useContext, useEffect } from 'react'
import PostContext from '../context/Post/PostContext';
import Post from './Post';

const PostsWindow = () => {

    const context = useContext(PostContext);

    const { posts, getAllPosts } = context;

    useEffect(() => {
        setTimeout(() => {
            getAllPosts();
        }, 1000);
    }, [])


    return (
        <div className='post'>
            {
                posts.map((post) => {
                    return <Post key={post.id} post={post} />
                })
            }
        </div>
    )
}

export default PostsWindow;
