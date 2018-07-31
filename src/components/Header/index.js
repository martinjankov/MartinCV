import React from 'react';

import './Header.css';

const Header = ({children}) => {
    return (
        <header id="header" className="tt-nav nav-border-bottom">
            <div className="header-sticky brand-header">
                <div className="container">
                    {children}
                </div>
            </div>
        </header>
    )
}

export default Header;