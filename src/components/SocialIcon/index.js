import React from 'react';

import './SocialIcon.css';

export const SocialIcon = ({link, icon}) => {
    return (
        link && link !== '' ? 
            <a href={link} target='_blank'><i className={icon}></i></a> : 
            <i className={icon}></i>
    )
}