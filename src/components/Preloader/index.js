import React from 'react';

import './Preloader.css';

export const Preloader = () => {
    return (
        <div className="fakeloader" id="preloader">
            <div className="fakeloader-inner">
                <div className="fl spinner3">
                    <div className="dot1"></div>
                    <div className="dot2"></div>
                </div>
            </div>
        </div>
    )
}