import React, { useState } from 'react';
import UserContext from './UserContext';

const UserState = (props) => {

    const [user, setUser] = useState({});
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

    return (
        <UserContext.Provider value={{ user, registerUser, generateToken }} >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState