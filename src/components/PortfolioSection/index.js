import React from 'react';

import './PortfolioSection.css';

export const PortfolioSection = ({ children, description }) => {
    return (
        <section id="portfolio" className="padding-equal work">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="text-center title-sec">
                            <h1 className="text-uppercase">My portfolio</h1>
                            <div className="line-section">
                                <span className="large-line"></span>
                                <span className="small-line"></span>
                                <span className="large-line"></span>
                            </div>
                            <p className="section-sub">{description}</p>
                        </div>
                    </div>
                </div>
                <div id="portfolio_list" className="row">
                    {children}
                </div>
            </div>
        </section>
    )
}