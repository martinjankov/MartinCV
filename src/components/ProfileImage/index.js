import React from 'react';

import './ProfileImage.css';

const CoverImage = ({link}) => {
    return(
        <div className="profile-image" style={{ backgroundImage : `url(${link})` }}></div>
    );
}

export default CoverImage