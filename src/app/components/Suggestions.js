import React from 'react'
import { Link } from 'react-router-dom'

const Suggestions = () => {
    return (<>
        <div className='head'>
            <div>
                <img src={require('../images/heart.png')} />
                <p style={{ paddingLeft: "23px" }} > <strong> <a href='#'>kohli</a> </strong>  <br /> <span style={{ color: "#8e8e8e", fontSize: "13px" }}>Virat Kohli</span></p>
            </div>
            <a href='#' style={{ color: "#0095f6", fontWeight: 600, fontSize: "13px" }}>Switch</a>
        </div>
        <div className='mid'>
            <div className='upper'>
                <span>Suggestions For You</span>
                <Link to={`/demo/suggestions`} style={{ fontWeight: 600, fontSize: "13px" }}>See All</Link>
            </div>

            <div className='lower'>
                <div>

                    <img src={require('../images/heart.png')} />
                    <p style={{ paddingLeft: "13px" }} > <strong> <a href='#' >rishabh_pant</a> </strong>  <br /> <span style={{ color: "#8e8e8e", fontSize: "13px" }}>Rishabh Pant</span></p>
                </div>
                <a href='#' style={{ color: "#0095f6", fontWeight: 600, fontSize: "13px" }}>Follow</a>
            </div>
            <div className='lower'>
                <div>

                    <img src={require('../images/heart.png')} />
                    <p style={{ paddingLeft: "13px" }} > <strong> <a href='#' >hardikkk</a> </strong>  <br /> <span style={{ color: "#8e8e8e", fontSize: "13px" }}>Hardik Pandya</span></p>
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
                    <p style={{ paddingLeft: "13px" }} > <strong> <a href='#' >boomrah</a> </strong>  <br /> <span style={{ color: "#8e8e8e", fontSize: "13px" }}>Jasprit Bumrah</span></p>
                </div>
                <a href='#' style={{ color: "#0095f6", fontWeight: 600, fontSize: "13px" }}>Follow</a>
            </div>
            <div className='lower'>
                <div>

                    <img src={require('../images/heart.png')} />
                    <p style={{ paddingLeft: "13px" }} > <strong> <a href='#' >ganguly</a> </strong>  <br /> <span style={{ color: "#8e8e8e", fontSize: "13px" }}>Saurav Ganguly</span></p>
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
