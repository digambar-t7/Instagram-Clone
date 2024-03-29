import React, { useEffect, useState } from 'react';
import UserContext from './UserContext';

const UserState = (props) => {

    const [user, setUser] = useState('');
    const [acc, setAcc] = useState('');
    const host = "http://localhost:8080/api/v1/user/";

    // POST : Register a user
    const registerUser = async (formData) => {
        const response = await fetch(`${host}register`, {
            method: "POST",
            body: formData
        });
        const json = await response.json();
        setUser(json);
    }

    // POST : generate-token
    const generateToken = async (data) => {
        const response = await fetch(`http://localhost:8080/generate-token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const json = await response.json();
        setUser(json.user)
        localStorage.setItem("insta-user-token", json.token);
    }

    // GET : get userAccount by username
    const getAccByUsername = async (username) => {
        const response = await fetch(`${host}${username}`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('insta-user-token')
            }
        });
        const json = await response.json();
        setAcc(json);
    }

    // GET : get user by token i.e self account
    const getUserByToken = async () => {
        const response = await fetch(`${host}bytoken`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('insta-user-token')
            }
        });
        const json = await response.json();
        setUser(json);
    }

    useEffect(() => {
        console.log("Success!!! user set")
        console.log(user)
    }, [user])

    useEffect(() => {
        console.log(acc);
    }, [acc])


    return (
        <UserContext.Provider value={{ user, acc, registerUser, generateToken, getUserByToken, getAccByUsername }} >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState