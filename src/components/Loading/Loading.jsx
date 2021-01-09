import React from 'react';

import './Loading.css';

import image from '../../assets/img/loading.png';

function Loading() {
    return (
        <div className="loading_screen">
            <div className="loader">
                <img src={image} alt="Loading..." />
                <p>loading</p>
            </div>
        </div>
    )
}

export default Loading
