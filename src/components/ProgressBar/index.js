import React from 'react';

import './ProgressBar.css';

export const ProgressBar = ({percentage, title, label = false}) => {
    return (
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
            <div className={`c100 p${percentage}`}>
            <span>{percentage}%</span>
            <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
            </div>
            </div>
            <div className="fiels">
            <span>
            {title}
            </span>
            </div>
        </div>
    )
}