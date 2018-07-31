import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './Banner.css';
import { SocialIcon } from '..';

export const Banner = ({imgUrl, userName, shortDescription}) => {
    return (
        <section id="home" className="banner-15 style-1 rel gradients">
            <img src={imgUrl} alt=""/>
            <div className="valign-cell">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h1 className="intro-title text-uppercase mb-30">{userName}</h1>
                            <p className="text-medium">{shortDescription}</p>
                            <Router>
                                <ul className="social-link dark mb-30">
                                    <li>
                                        <SocialIcon link='#' icon='fa fa-facebook'/>
                                    </li>
                                    <li>
                                        <SocialIcon link='#' icon='fa fa-twitter'/>
                                    </li>
                                    <li>
                                        <SocialIcon link='#' icon='fa fa-vimeo'/>
                                    </li>
                                    <li>
                                        <SocialIcon link='#' icon='fa fa-dribbble'/>
                                    </li>
                                    <li>
                                        <SocialIcon link='#' icon='fa fa-instagram'/>
                                    </li>
                                    <li>
                                        <SocialIcon link='#' icon='fa fa-google-plus'/>
                                    </li>
                                </ul>
                            </Router>
                            <Router>
                                <div>
                                    <Link to="#" className="btn btn-lg pink">
                                        About Me
                                    </Link>
                                    <Link to="#" className="btn btn-lg black">
                                        Hire Me
                                    </Link>
                                </div>
                            </Router>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}