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
                "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZW1vIiwiZXhwIjoxNjYxMjI2MTA5LCJpYXQiOjE2NjExOTAxMDl9.PVS8boyEOQMUsXHvMZ_djSVR6ehfkpTM3xKzfH827DM"
            }
        });
        const json = await response.json();
        console.log("Getallposts() : " + json[0]);
        setPosts(json);
    }


    return (
        <PostContext.Provider value={{ posts, getAllPosts }}>
            {props.children}
        </PostContext.Provider>
    )
}

export default PostState;