import React from 'react';

import './NavbarButton.css';

export const NavbarButton = () => {
    return (
        <button data-target="#myNavbar" data-toggle="collapse" className="navbar-toggle" type="button" aria-expanded="false">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>
    )
}