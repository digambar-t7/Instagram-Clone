import React, { useState } from 'react'
import PostContext from './PostContext';

const PostState = (props) => {

    const host = "http://localhost:8080/api/v1/post/"
    const [posts, setPosts] = useState([]);

    // GET : getAllPosts
    const getAllPosts = async () => {
        const response = await fetch(`${host}getallposts`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZW1vIiwiZXhwIjoxNjYxNDcxNjQ0LCJpYXQiOjE2NjE0MzU2NDR9.19mTgpfBWo0QPpXdTkdxUXKw3bpEAUwRAZM3CDeiguQ"
            }
        });
        const json = await response.json();
        setPosts(json);
    }


    return (
        <PostContext.Provider value={{ posts, getAllPosts }}>
            {props.children}
        </PostContext.Provider>
    )
}

export default PostState;