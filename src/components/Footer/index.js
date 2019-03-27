import React from 'react';

import './Footer.css';

export const Footer = ({children}) => {
    return (
        <footer className="footer dark gradients">
            {children}
            <div className="secondary-footer brand-bg darken-2">
                <div className="container text-center">
                    <span className="copy-text">
                        Copyright &copy; {new Date().getFullYear()} &nbsp; All Rights Reserved
                    </span>
                </div>
            </div>
        </footer>
    )
}