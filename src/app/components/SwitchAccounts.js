import React from 'react'
import '../css/SwitchAccounts.css'

const SwitchAccounts = () => {
    const closeSwitchAccountsModal = () => {
        // document.getElementsByClassName('overlay')[0].style.display = "none";
        document.getElementById('SwitchAccounts').style.display = "none";
        document.title = "Instagram";
    }
    return (<>
        <div id='SwitchAccounts' className='modal'>
            <div className='header' >
                <svg aria-label="Back" onClick={closeSwitchAccountsModal} className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="2.909" x2="22.001" y1="12.004" y2="12.004"></line><polyline fill="none" points="9.276 4.726 2.001 12.004 9.276 19.274" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline></svg>
                <h4>Switch Accounts</h4>
                <h4 style={{ paddingRight: '12px', color: "#0095f6", cursor: 'pointer' }} >Next</h4>
            </div>
            <div className='main'>
                <div className='account'>
                    <span><img src={require('../images/heart.png')}></img></span>
                    <span className='accName'>digambar_t7</span>
                    <span><svg aria-label="Checkmark filled icon" class="_ab6-" color="#0095f6" fill="#0095f6" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.001.504a11.5 11.5 0 1011.5 11.5 11.513 11.513 0 00-11.5-11.5zm5.706 9.21l-6.5 6.495a1 1 0 01-1.414-.001l-3.5-3.503a1 1 0 111.414-1.414l2.794 2.796L16.293 8.3a1 1 0 011.414 1.415z"></path></svg></span>
                </div>
                <div className='account'>
                    <span><img src={require('../images/heart.png')}></img></span>
                    <span className='accName'>digambar_t7</span>
                    <span><svg aria-label="Checkmark filled icon" class="_ab6-" color="#0095f6" fill="#0095f6" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.001.504a11.5 11.5 0 1011.5 11.5 11.513 11.513 0 00-11.5-11.5zm5.706 9.21l-6.5 6.495a1 1 0 01-1.414-.001l-3.5-3.503a1 1 0 111.414-1.414l2.794 2.796L16.293 8.3a1 1 0 011.414 1.415z"></path></svg></span>
                </div>
                <div className='account'>
                    <span><img src={require('../images/heart.png')}></img></span>
                    <span className='accName'>digambar_t7</span>
                    <span><svg aria-label="Checkmark filled icon" class="_ab6-" color="#0095f6" fill="#0095f6" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.001.504a11.5 11.5 0 1011.5 11.5 11.513 11.513 0 00-11.5-11.5zm5.706 9.21l-6.5 6.495a1 1 0 01-1.414-.001l-3.5-3.503a1 1 0 111.414-1.414l2.794 2.796L16.293 8.3a1 1 0 011.414 1.415z"></path></svg></span>
                </div>
            </div>
            <div className='footer'>
                <h4>Log into an existing account</h4>
            </div>

            <div className='close-btn'>
                <svg aria-label="Close" onClick={closeSwitchAccountsModal} className="_8-yf5 " color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24"><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>
            </div>
        </div>


        {/* <div className='overlay' onClick={closeAddpost}></div> */}
    </>
    )
}

export default SwitchAccounts;