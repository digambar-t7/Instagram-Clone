import React, { useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import PostContext from '../context/Post/PostContext';
import '../css/Navbar.css';
import NavProfileBlock from './NavProfileBlock';
import Notifications from './Notifications';

const Navbar = () => {

    const postContext = useContext(PostContext);
    const { addPost } = postContext

    const [find, setFind] = useState("");
    const [file, setFile] = useState(null)
    const [location, setLocation] = useState('Pune')
    const [caption, setCaption] = useState('')

    const handleFile = (e) => {
        e.preventDefault();
        setFile(e.target.files[0]);
        console.log(e.target.files[0])
    }
    const handleLocation = (e) => {
        setLocation(e.target.value)
    }
    const handleCaption = (e) => {
        setCaption(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file, file.name)
        formData.append('postData', JSON.stringify({ location, caption }))
        addPost(formData)
    }

    // Converts selectedImage to blob format
    const jsonBlob = (obj) => {
        return new Blob([JSON.stringify(obj)], {
            type: "application/json",
        });
    }

    const newPost = useRef(null);

    const handleFind = (e) => {
        setFind(e.target.value);
    }

    const clickAddpost = () => {
        document.getElementsByClassName('overlay')[0].style.display = "block";
        newPost.current.style.display = "block";
        document.title = "Create new post | Instagram";
    }

    const closeAddpost = () => {
        document.getElementsByClassName('overlay')[0].style.display = "none";
        newPost.current.style.display = "none";
        document.title = "Instagram";
    }

    const toggleNotifs = () => {
        let notifBlock = document.getElementById("Notifications");
        let notif = document.getElementById("notif");
        let selectedNotif = document.getElementById("selectedNotif");
        if (notifBlock.style.display === "none" || notifBlock.style.display === "") {
            notifBlock.style.display = "flex";
            notif.style.display = "none"
            selectedNotif.style.display = "block"
        } else {
            notif.style.display = "block"
            selectedNotif.style.display = "none"
            notifBlock.style.display = "none";
        }
    }

    const toggleNavProfileBlock = () => {
        let navProfileBlock = document.getElementById("NavProfileBlock");
        if (navProfileBlock.style.display === "none" || navProfileBlock.style.display === "") {
            navProfileBlock.style.display = "block";
        } else {
            navProfileBlock.style.display = "none";
        }
    }

    return (

        <div id='Navbar'>
            <nav>
                <Link to={"/"}><img className='instagram' src={require('../images/instagram.png')} alt='instagram' /></Link>
                <div className='search'>
                    <img className='search-icon' src={require('../images/search.png')} />
                    <input value={find} onChange={handleFind} placeholder="Search" />
                </div>

                <div className='tabs'>
                    <Link to={'/'}>
                        <svg aria-label="Home" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z"></path></svg>
                    </Link>

                    <span style={{ marginRight: "-1rem" }}>
                        <svg aria-label="Messenger" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.003 2.001a9.705 9.705 0 110 19.4 10.876 10.876 0 01-2.895-.384.798.798 0 00-.533.04l-1.984.876a.801.801 0 01-1.123-.708l-.054-1.78a.806.806 0 00-.27-.569 9.49 9.49 0 01-3.14-7.175 9.65 9.65 0 0110-9.7z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.739"></path><path d="M17.79 10.132a.659.659 0 00-.962-.873l-2.556 2.05a.63.63 0 01-.758.002L11.06 9.47a1.576 1.576 0 00-2.277.42l-2.567 3.98a.659.659 0 00.961.875l2.556-2.049a.63.63 0 01.759-.002l2.452 1.84a1.576 1.576 0 002.278-.42z" fillRule="evenodd"></path></svg>
                        <span id='unread' >5</span>
                    </span >

                    <svg onClick={clickAddpost} aria-label="New Post" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>
                    <Link to={'/login'}>
                        <svg aria-label="Find People" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon><polygon fillRule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
                    </Link>

                    <svg onClick={toggleNotifs} id="notif" aria-label="Activity Feed" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
                    <svg onClick={toggleNotifs} id="selectedNotif" display="none" aria-label="Activity Feed" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                    {/* <svg aria-label="Activity Feed" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg> */}
                    <div onClick={toggleNavProfileBlock} id='profile-tab'></div>
                </div>

            </nav>

            {/* Addpost Modal */}
            <div className='modal' ref={newPost} >
                <div className='header' >
                    <svg aria-label="Back" onClick={closeAddpost} className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="2.909" x2="22.001" y1="12.004" y2="12.004"></line><polyline fill="none" points="9.276 4.726 2.001 12.004 9.276 19.274" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline></svg>
                    <h4>Create new post</h4>
                    <h4 style={{ paddingRight: '12px', color: "#0095f6", cursor: 'pointer' }} >Next</h4>
                </div>
                <div className='create-post' >
                    {/* <svg aria-label="Icon to represent media such as images or videos" className="_8-yf5 " color="#262626" fill="#262626" height="77" role="img" viewBox="0 0 97.6 77.3" width="96"><path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path><path d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path><path d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path></svg>
                    <p style={{ fontSize: '23px' }} >Drag photos and videos here</p>
                    <button className='blue btn' type='file' style={{ cursor: 'pointer' }}>Select from computer</button> */}
                    {/* New Post form */}
                    <div className='input-block'>
                        <label>Select Picture </label>
                        <input type="file" name="file" onChange={handleFile} style={{ border: "none" }} />
                    </div>
                    <div className='input-block'>
                        <label>Add to Location</label>
                        <input value={location} onChange={handleLocation} type='text' placeholder='Location' />
                    </div>
                    <div className='input-block'>
                        <label>Add to Caption</label>
                        <input value={caption} onChange={handleCaption} type='text' placeholder='Caption' />
                    </div>
                    <div className='input-block'>
                        <button onClick={handleSubmit} className='blue btn' style={{ margin: "auto" }} >Create Post</button>
                    </div>
                    {/* New Post form */}
                </div>

                <div className='close-btn'>
                    <svg aria-label="Close" onClick={closeAddpost} className="_8-yf5 " color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24"><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>
                </div>
            </div>

            {/* a blanket between webpage & the modal */}
            <div className='overlay' onClick={closeAddpost}></div>

            <Notifications />
            <NavProfileBlock />


        </div >
    )
}

export default Navbar;
