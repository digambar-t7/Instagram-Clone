import React, { useState } from 'react'
import '../css/RegisterUser.css'

const RegisterUser = () => {

    const [details, setDetails] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        bio: '',
        dob: '',
        profilePic: ''
    });

    const handleDetails = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    }

    const handleSignup = () => {
        console.log(details);
    }

    return (
        <div id='RegisterUser'>

            <div className='modal'>
                <img alt='instagram-logo' src={require("../images/instagram.png")} />
                <div className='form'>
                    <div>
                        <label>First Name</label>
                        <input type="text" name='firstName' value={details.firstName} onChange={handleDetails} />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" name='lastName' value={details.lastName} onChange={handleDetails} />
                    </div>
                    <div>
                        <label>Username</label>
                        <input type="text" name='username' value={details.username} onChange={handleDetails} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name='email' value={details.email} onChange={handleDetails} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name='password' value={details.password} onChange={handleDetails} />
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input type="password" name='confirmPassword' value={details.confirmPassword} onChange={handleDetails} />
                    </div>
                    <div>
                        <label>Date of Birth</label>
                        <input type="date" name='dob' value={details.dob} onChange={handleDetails} />
                    </div>
                    <div>
                        <label>Profile Pic</label>
                        <input type="file" name='profilePic' value={details.profilePic} onChange={handleDetails} />
                    </div>
                    <div className='bio-div'>
                        <label>Add to your bio</label>
                        <input type="text" name='bio' value={details.bio} onChange={handleDetails} />
                    </div>
                </div>
                <button className='blue-btn' onClick={handleSignup}>Signup</button>
            </div>
        </div>
    )
}

export default RegisterUser;