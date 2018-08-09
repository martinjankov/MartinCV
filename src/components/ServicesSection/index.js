import React from 'react';

export const ServicesSection = ({children, description}) => {
    return (
        <section id="services" className="padding-equal about features">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="text-center title-sec">
                            <h1 className="text-uppercase">Services</h1>
                            <div className="line-section">
                                <span className="large-line"></span>
                                <span className="small-line"></span>
                                <span className="large-line"></span>
                            </div>
                            <p className="section-sub">{description}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="about-contnet">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}