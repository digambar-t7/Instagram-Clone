import React from 'react'
import { useParams } from 'react-router-dom';
import "../css/Friends.css"

const Friends = (props) => {
    const params = useParams();
    return (
        <div id='Friends'>
            <div className='heading'>
                #{params.type.toLocaleUpperCase()}
            </div>
            <div className='container'>

                <div className='block'>
                    <div className='inner'>
                        <img src={require('../images/heart.png')} alt='dp' />
                        <div className='details'>
                            <span style={{ color: "black" }}>digambar_t7</span>
                            <span>Digambar Tupurwadi</span>
                        </div>
                    </div>
                    <button className='blue btn'> Remove </button>
                </div>

                <div className='block'>
                    <div className='inner'>
                        <img src={require('../images/heart.png')} alt='dp' />
                        <div className='details'>
                            <span style={{ color: "black" }}>digambar_t7</span>
                            <span>Digambar Tupurwadi</span>
                        </div>
                    </div>
                    <button className='blue btn'> Remove </button>
                </div>

            </div>
        </div>
    )
}

export default Friends;