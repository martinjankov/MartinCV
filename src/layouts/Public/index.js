import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

import './Public.css';

const Public = ({children}) => {
    return (
        <div className="wrapper">
            {children} 
        </div>
    )
}

export default Public; 