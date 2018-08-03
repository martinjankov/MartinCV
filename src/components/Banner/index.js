import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';

import './Banner.css';
import { SocialIcon } from '..';

export const Banner = ({ imgUrl, userName, shortDescription }) => {
    return (
        <section id="home" className="banner-15 style-1 rel gradients">
            <img src={imgUrl} alt="" />
            <div className="valign-cell">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h1 className="intro-title text-uppercase mb-30">{userName}</h1>
                            <p className="text-medium">{shortDescription}</p>
                            <Router>
                                <ul className="social-link dark mb-30">
                                    <li>
                                        <SocialIcon link='https://www.linkedin.com/in/martinjankov/' icon='fa fa-linkedin' />
                                    </li>
                                    <li>
                                        <SocialIcon link='https://twitter.com/mjba_fenix' icon='fa fa-twitter' />
                                    </li>
                                    <li>
                                        <SocialIcon link='https://www.instagram.com/martin.jankov.7/' icon='fa fa-instagram' />
                                    </li>
                                </ul>
                            </Router>
                            <div>
                                <Scrollchor to="#about" className="btn btn-lg pink">About Me</Scrollchor>
                                <a href="https://www.upwork.com/o/profiles/users/_~01b2011f511052e739/"  rel="noopener noreferrer" target="_blank" className="btn btn-lg black">Hire Me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}