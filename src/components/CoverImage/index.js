import React from 'react';

import './CoverImage.css';

const CoverImage = ({children, link}) => {
    return(
        <div className="cover" style={{ backgroundImage : `url(${link})` }}>
            {children}
        </div>
    );
}

export default CoverImage