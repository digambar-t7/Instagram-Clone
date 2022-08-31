import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/User/UserContext';
import '../css/Login.css';

const Login = () => {
    const userContext = useContext(UserContext);
    const { generateToken } = userContext;

    const [loginDetails, SetloginDetails] = useState({
        username: "",
        password: ""
    });

    const handleLoginDetails = (e) => {
        SetloginDetails({ ...loginDetails, [e.target.name]: e.target.value });
    }

    const handleLogin = () => {
        generateToken(loginDetails);
    }

    return (
        <div id='Login'>
            <div className="modal" >
                <img className='inform' alt='instagram-logo' src={require("../images/instagram.png")} />
                <input className='inform' placeholder='Enter username or email' type="text" name='username' value={loginDetails.username} onChange={handleLoginDetails} />
                <input className='inform' placeholder='Enter password' type="password" name='password' value={loginDetails.password} onChange={handleLoginDetails} />
                <Link to={'/'}>
                    <button className='inform blue btn' onClick={handleLogin}  >Log in</button>
                </Link>
                {/* <Link to={'/my-profile-page'}>
                    <button className='inform blue btn'>Redirect</button>
                </Link> */}
                <Link className='frgtpwd inform' to={"/forgotpassword"}>Forgot password?</Link>
            </div>
        </div>
    )
}

export default Login;