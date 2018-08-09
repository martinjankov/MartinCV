import React from 'react';

import './LinearIcons.css';

export const ServiceBox = ({icon, title, description}) => {
    return (
        <div className="col-md-4 col-sm-12 sm-col-sm-12">
            <div className="box">
                <div className="icon">
                    <span className={`overview-img lnr ${icon}`}></span>
                </div>
                <hr />
                <div className="desc">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}