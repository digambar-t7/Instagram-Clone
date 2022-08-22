import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';

const Login = () => {

    const [loginDetails, SetloginDetails] = useState({
        username: "",
        password: ""
    });

    const handleLoginDetails = (e) => {
        SetloginDetails({ ...loginDetails, [e.target.name]: e.target.value });
    }

    return (
        <div id='Login'>
            <div className="modal" >
                <img className='inform' alt='instagram-logo' src={require("../images/instagram.png")} />
                <input className='inform' placeholder='Enter username or email' type="text" name='username' value={loginDetails.username} onChange={handleLoginDetails} />
                <input className='inform' placeholder='Enter password' type="password" name='password' value={loginDetails.password} onChange={handleLoginDetails} />
                <button className='inform blue-btn'>Log in</button>
                <Link className='frgtpwd inform' to={"/forgotpassword"}>Forgot password?</Link>
            </div>
        </div>
    )
}

export default Login;