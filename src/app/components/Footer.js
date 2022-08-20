import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

const Footer = () => {
    return (
        <div id='Footer'>
            <Link to={'Meta'}>Meta</Link>
            <Link to={'About'}>About</Link>
            <Link to={'Blog'}>Blog</Link>
            <Link to={'Jobs'}>Jobs</Link>
            <Link to={'Help'}>Help</Link>
            <Link to={'API'}>API</Link>
            <Link to={'Privacy'}>Privacy</Link>
            <Link to={'Terms'}>Terms</Link>
            <Link to={'Top-Accounts'}>Top Accounts</Link>
            <Link to={'Hastags'}>Hastags</Link>
            <Link to={'Locations'}>Locations</Link>
            <Link to={'Instagram-Lite'}>Instagram Lite</Link>
            <Link to={'Contact-Uploading-&-Non-Users'}>Contact Uploading & Non-Users</Link>            <select>
                <option value={'English'}>Kannada</option>
                <option value={'English'}>English</option>
                <option value={'English'}>Hindi</option>
                <option value={'English'}>Marathi</option>
            </select>
            <Link to={'2022-Instagram-from-dlgambar'}>&#169; 2022 Instagram from dlgambar</Link>
        </div>
    )
}

export default Footer;