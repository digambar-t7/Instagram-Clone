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
                "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhaXNodUQiLCJleHAiOjE2NjE1NDA4MDcsImlhdCI6MTY2MTUwNDgwN30.zn9bQdn9W6UwOpjVeuWqvmVF03TVyLtJLnsdA1lIqck"
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