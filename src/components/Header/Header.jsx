import React from 'react'

import image from '../../assets/img/logo.png';
import './Header.css'

function Header() {
    return (
        <div className='header__main'>
            <img src={image} alt="" />
        </div>
    )
}

export default Header
