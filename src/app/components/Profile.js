import React from 'react'
import '../css/Profile.css'
import Footer from './Footer';
import Stories from './Stories';
import SwitchAccounts from './SwitchAccounts';

const Profile = () => {
    return (
        <div id='Profile'>

            {/* Bio Section */}
            <div className='bio'>
                <div className='left'>
                    <img src={require("../images/post/fish.jpg")}></img>
                </div>
                <div className='right'>
                    <div className='nameBtns'>
                        <div className='username'>cristiano</div>
                        <div className='buttons'>
                        </div>
                    </div>
                    <div className='numbers'>
                        <span><strong>3,340</strong> posts</span>
                        <span><strong>477M</strong> followers</span>
                        <span><strong>520</strong> following</span>
                    </div>
                    <p className='name'>Cristiano Ronaldo</p>
                    <div className='text'>www.cristianoronaldo.com</div>
                    <p className='followedBy'>Followed by kshitij_kobal, deepikapadukone, prak7shzzz + 149 more</p>
                </div>
            </div>

            {/* Highlights Section */}
            <div id='highlights'>
                <Stories />
            </div>

            {/* Content Section */}
            <div id='content-container'>
                <div className='type'>
                    <div>POSTS</div>
                    <div>REELS</div>
                    <div>TAGGED</div>
                </div>
                <div className='body'>
                    <div className='piece'>
                        <img src={require("../images/post/fruits.jpg")}></img>
                        <div className='cover'></div>
                    </div>
                    <div className='piece'>
                        <img src={require("../images/post/plain.jpg")}></img>
                        <div className='cover'></div>
                    </div>
                    <div className='piece'>
                        <img src={require("../images/post/bowl.jpg")}></img>
                        <div className='cover'></div>
                    </div>
                    <div className='piece'>
                        <img src={require("../images/post/fish.jpg")}></img>
                        <div className='cover'></div>
                    </div>
                    <div className='piece'>
                        <img src={require("../images/post/main.jpg")}></img>
                        <div className='cover'></div>
                    </div>
                </div>
            </div>
            <Footer />
            <SwitchAccounts />
        </div>
    )
}

export default Profile;