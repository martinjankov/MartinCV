import React from 'react';

import './ProjectBox.css';

export const ProjectBox = ({ link, image, title, description, companyLink, companyName }) => {
    return (
        <div className="col-sm-4 col-xs-12 pitem seo1 portfolio">
            <article>
                <a href={link} target="_blank">
                    <div className="project-image" style={{backgroundImage: `url(${image})`}}></div>
                </a>
                <div className="project-meta">
                    <a href={link} target="_blank">
                        <h3>{title}</h3>
                    </a>
                    <div className="technology">
                        {description}
                    </div>
                    <div className="company">
                        Worked on project at: {
                            companyLink !== '' ? 
                            <a href={companyLink} target="_blank">{companyName}</a> : 
                            companyName
                        }
                    </div>
                </div>
            </article>
        </div>

    )
}