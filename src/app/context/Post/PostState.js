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
                // "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhaXNodUQiLCJleHAiOjE2NjE1NDA4MDcsImlhdCI6MTY2MTUwNDgwN30.zn9bQdn9W6UwOpjVeuWqvmVF03TVyLtJLnsdA1lIqck"
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
                "Authorization": "Bearer " + localStorage.getItem('insta-user-token')
            }
        });
        const json = await response.json();
        setProfilePosts(json)
    }

    useEffect(() => {
        console.log("set profile posts completed")
        console.log(profilePosts)
    }, [profilePosts])



    return (
        <PostContext.Provider value={{ posts, profilePosts, getAllPosts, getPostsFromUser }}>
            {props.children}
        </PostContext.Provider>
    )
}

export default PostState;