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
                        <span className='username'>cristiano</span>
                        <button>Message</button>
                        <button style={{ width: '74px' }}><svg aria-label="Following" class="_ab6-" color="#262626" fill="#262626" height="15" role="img" viewBox="0 0 95.28 70.03" width="20"><path d="M64.23 69.98c-8.66 0-17.32-.09-26 0-3.58.06-5.07-1.23-5.12-4.94-.16-11.7 8.31-20.83 20-21.06 7.32-.15 14.65-.14 22 0 11.75.22 20.24 9.28 20.1 21 0 3.63-1.38 5.08-5 5-8.62-.1-17.28 0-25.98 0zm19-50.8A19 19 0 1164.32 0a19.05 19.05 0 0118.91 19.18zM14.76 50.01a5 5 0 01-3.37-1.31L.81 39.09a2.5 2.5 0 01-.16-3.52l3.39-3.7a2.49 2.49 0 013.52-.16l7.07 6.38 15.73-15.51a2.48 2.48 0 013.52 0l3.53 3.58a2.49 2.49 0 010 3.52L18.23 48.57a5 5 0 01-3.47 1.44z"></path></svg></button>
                        <button><svg aria-label="Down chevron icon" class="_ab6-" color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path></svg></button>
                        <svg aria-label="Options" class="_ab6-" color="#262626" fill="#262626" height="32" role="img" viewBox="0 0 24 24" width="32"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
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