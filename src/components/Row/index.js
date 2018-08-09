import React from 'react';

import './Row.css';

export const Row = ({label, children}) => {
    return (
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 c-row">
            { label ? <h5 className="row-label">{label}</h5> : '' }
            {children}
        </div>
    )
}