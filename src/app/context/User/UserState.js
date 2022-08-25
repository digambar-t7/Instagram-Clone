import React, { useState } from 'react';
import UserContext from './UserContext';

const UserState = (props) => {

    const [user, setUser] = useState(null);
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

    return (
        <UserContext.Provider value={{ user, registerUser }} >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState