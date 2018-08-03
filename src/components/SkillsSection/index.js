import React from 'react';

import './SkillsSection.css';

export const SkillsSection = ({children}) => {
    return (
        <section id="skills" className="padding-equal skills gray-bg rel">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="text-center title-sec">
                        <h1 className="text-uppercase">Skills</h1>
                        <div className="line-section">
                            <span className="large-line"></span>
                            <span className="small-line"></span>
                            <span className="large-line"></span>
                        </div>
                        <p className="section-sub">
                            Over my career as web developer I have aquired knowledge of multiple technologies from which on some I am still 
                            upgrading my knowledge.
                        </p>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </section>
    )
}