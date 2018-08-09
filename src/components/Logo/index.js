import React from 'react';

import './Logo.css';

export const Logo = ({logoWhite, logoBlack}) => {
    return (
        <span>
            <img src={logoWhite} alt='' className='logo-white' />
            <img src={logoBlack} alt='' className='logo-colored' />
        </span>
    )
}