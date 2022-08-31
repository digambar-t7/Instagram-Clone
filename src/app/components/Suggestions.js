import React from 'react'
import { Link } from 'react-router-dom'

const Suggestions = () => {
    return (<>
        <div className='head'>
            <div>
                <img src={require('../images/heart.png')} />
                <p style={{ paddingLeft: "23px" }} > <strong> <a href='#'>kali</a> </strong>  <br /> <span style={{ color: "#8e8e8e", fontSize: "13px" }}>kali Sheth</span></p>
            </div>
            <a href='#' style={{ color: "#0095f6", fontWeight: 600, fontSize: "13px" }}>Switch</a>
        </div>
        <div className='mid'>
            <div className='upper'>
                <span>Suggestions For You</span>
                <Link to={`/aishuD/suggestions`} style={{ fontWeight: 600, fontSize: "13px" }}>See All Link</Link>
            </div>

            <div className='lower'>
                <div>

                    <img src={require('../images/heart.png')} />
                    <p style={{ paddingLeft: "13px" }} > <strong> <a href='#' >kali</a> </strong>  <br /> <span style={{ color: "#8e8e8e", fontSize: "13px" }}>kali Sheth</span></p>
                </div>
                <a href='#' style={{ color: "#0095f6", fontWeight: 600, fontSize: "13px" }}>Follow</a>
            </div>
            <div className='lower'>
                <div>

                    <img src={require('../images/heart.png')} />
                    <p style={{ paddingLeft: "13px" }} > <strong> <a href='#' >kali</a> </strong>  <br /> <span style={{ color: "#8e8e8e", fontSize: "13px" }}>kali Sheth</span></p>
                </div>
                <a href='#' style={{ color: "#0095f6", fontWeight: 600, fontSize: "13px" }}>Follow</a>
            </div>
            <div className='lower'>
                <div>

                    <img src={require('../images/heart.png')} />
                    <p style={{ paddingLeft: "13px" }} > <strong> <a href='#' >kali</a> </strong>  <br /> <span style={{ color: "#8e8e8e", fontSize: "13px" }}>kali Sheth</span></p>
                </div>
                <a href='#' style={{ color: "#0095f6", fontWeight: 600, fontSize: "13px" }}>Follow</a>
            </div>
            <div className='lower'>
                <div>

                    <img src={require('../images/heart.png')} />
                    <p style={{ paddingLeft: "13px" }} > <strong> <a href='#' >kali</a> </strong>  <br /> <span style={{ color: "#8e8e8e", fontSize: "13px" }}>kali Sheth</span></p>
                </div>
                <a href='#' style={{ color: "#0095f6", fontWeight: 600, fontSize: "13px" }}>Follow</a>
            </div>
            <div className='lower'>
                <div>

                    <img src={require('../images/heart.png')} />
                    <p style={{ paddingLeft: "13px" }} > <strong> <a href='#' >kali</a> </strong>  <br /> <span style={{ color: "#8e8e8e", fontSize: "13px" }}>kali Sheth</span></p>
                </div>
                <a href='#' style={{ color: "#0095f6", fontWeight: 600, fontSize: "13px" }}>Follow</a>
            </div>

        </div>
        <div className='footer'>
            <div>
                <a href='#'>About</a>
                <a href='#'>Help</a>
                <a href='#'>Press</a>
                <a href='#'>API</a>
                <a href='#'>Jobs</a>
                <a href='#'>Privacy</a>
                <a href='#'>Terms</a><br />
                <a href='#'>Locations</a>
                <a href='#'>Top Accounts</a>
                <a href='#'>Hastags</a>
                <a href='#'>Language</a>
            </div>
            <div><a>© 2022 INSTAGRAM FROM META</a></div>
        </div>
    </>
    )
}

export default Suggestions
