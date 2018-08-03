import React from 'react';
import Scrollchor from 'react-scrollchor';

import { NavbarButton, Logo } from '..';

import './Navigation.css';

const Navigation = () => {
  return (

    <div id="materialize-menu" className="">
      <NavbarButton />
      <Scrollchor to="#top" className="logo-brand page-scroll" data-section="#top">
        <Logo logoWhite='/images/logo-white.png' logoBlack='/images/logo-blue.png' />
      </Scrollchor>
      <ul id="myNavbar" className="nav pull-right op-nav collapse navbar-collapse" aria-expanded="false" data-toggle="collapse">
        <li>
          <Scrollchor to="#skills">Skills</Scrollchor>
        </li>
        <li>
          <Scrollchor to="#portfolio">Portfolio</Scrollchor>
        </li>
        <li>
          <Scrollchor to="#contact">Contact</Scrollchor>
        </li>
        <li className="scrollable-fix"></li>
      </ul>
    </div>

  )
}

export default Navigation;