import React from 'react'
import '../css/Profile.css'
import Stories from './Stories';

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
            {/* Pictures Section */}
        </div>
    )
}

export default Profile;