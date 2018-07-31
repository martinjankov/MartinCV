import React from 'react';

import './Logo.css';

const Logo = ({logoWhite, logoBlack}) => {
    return (
        <span>
            <img src={logoWhite} alt='' className='logo-white' />
            <img src={logoBlack} alt='' className='logo-colored' />
        </span>
    )
}

export default Logo;