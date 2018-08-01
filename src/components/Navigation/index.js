import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './Navigation.css';
import { NavbarButton, Logo } from '..';

const Navigation = () => {
    return (
      <Router>
        <div id="materialize-menu" className="">
          <NavbarButton />
          <Link to="#top" className="logo-brand page-scroll" data-section="#top">
            <Logo logoWhite='/images/logo-white.png' logoBlack='/images/logo-blue.png'/>
          </Link>
          <ul id="myNavbar" className="nav  pull-right op-nav collapse navbar-collapse" aria-expanded="false" data-toggle="collapse">
            <li>
                <Link to="#skills" data-scroll="">Skills</Link>
            </li>
            <li>
                <Link to="#works" data-scroll="">Works</Link>
            </li>
            <li>
                <Link to="#contact" data-scroll="">Contact</Link>
            </li>
            <li className="scrollable-fix"></li>
          </ul>
        </div>
      </Router>
    )
}

export default Navigation;