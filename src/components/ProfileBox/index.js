import React from 'react';

import './ProfileBox.css';

export const ProfileBox = ({coverImg, profileImg, name, workPosition, age, email, degree, skype}) => {
    return (
        <div className="author-wrapper profile">
            <div className="author-cover">
                <img src={coverImg} alt={name} />
            </div>
            <div className="author-avatar">
                <img src={profileImg} alt={name} />
                <h2 className="text-extrabold text-uppercase no-margin">{name}</h2>
                <span>{workPosition}</span>
            </div>
            <ul className="author-meta">
                <li>
                    <span className="title"> Age </span> {age} Years Old
                </li>
                <li>
                    <span className="title"> Email </span> <a href={`mailto:${email}?subject=Job Offer`}>{email}</a>
                </li>
                <li>
                    <span className="title"> Skype </span> {skype}
                </li>
                <li>
                    <span className="title"> Got </span>
                    <span className="address">{degree}</span>
                </li>
            </ul>
        </div>
    )
}