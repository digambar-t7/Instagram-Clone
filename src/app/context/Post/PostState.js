import React, { useEffect, useState } from 'react'
import PostContext from './PostContext';

const PostState = (props) => {

    const host = "http://localhost:8080/api/v1/post/"
    const [posts, setPosts] = useState([]);
    const [profilePosts, setProfilePosts] = useState([]);

    // GET : getAllPosts
    const getAllPosts = async () => {
        const response = await fetch(`${host}getallposts`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('insta-user-token')
            }
        });
        const json = await response.json();
        setPosts(json);
    }

    // GET : getPostsFrom
    const getPostsFromUser = async (username) => {
        const response = await fetch(`${host}getpostsfrom/${username}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('insta-user-token')
            }
        });
        const json = await response.json();
        setProfilePosts(json)
    }

    useEffect(() => {
        if (profilePosts.length !== 0) {
            console.log("SUCCESS! Profile posts loaded")
        }
    }, [profilePosts])



    return (
        <PostContext.Provider value={{ posts, profilePosts, setProfilePosts, getAllPosts, getPostsFromUser }}>
            {props.children}
        </PostContext.Provider>
    )
}

export default PostState;