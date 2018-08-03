import React from 'react';

import { ProfileBox } from '..';

import './AboutMeSection.css';

export const AboutMeSection = () => {
    return (
        <section id="about" className="padding-equal about">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <ProfileBox 
                    coverImg='/images/martincv-cover.jpg'
                    profileImg='/images/martinjankov.jpg'
                    name='Martin Jankov'
                    workPosition='Web Developer'
                    age='27'
                    email='martinjankov7@gmail.com'
                    skype='martin.jankov7'
                    degree='Bachelor of Science (BS)'/>
              </div>
              <div className="col-md-8">
                <div className="white equal-height-column">
                  <div className="box-padding">
                    <h1 className="text-uppercase mb-30"> About Me</h1>
                    <p>Hello everybody. My name is Martin and I work as a Web Developer. I have over 4 years of experience in developing web applications and web services and a B.S. in the field of Information and Computer Science.</p>
                    <p>I love what I do and in my free time I sometimes work on my own projects. That helps me improve my skills and learn a few new things.</p>
                    <p>I also love Astronomy and I have my own site ( <a href='https://www.cosmic-knowledge.com' rel="noopener noreferrer" target='_blank'>www.cosmic-knowledge.com</a> ) where I post from time to time. Under my hobbies I would list ... hmm ... watching movies, tv shows especially sci-fi, listening to music and working on Cosmic Knowledge.</p>
                    <div className="cta-button">
                      <a href="/cv/cv-martin-jankov.pdf" target='_blank' rel="noopener noreferrer" download className="btn pink mr-20 waves-effect waves-light"><i className="fa fa-file"></i> Download CV</a>
                      <a href="/" className="btn black waves-effect waves-light" rel="noopener noreferrer"><i className="fa fa-envelope"></i> Get in touch</a>
                      <a href="https://github.com/martinjankov/" className="btn black waves-effect waves-light" target="_blank" rel="noopener noreferrer"><i className="fa fa-bitbucket"></i> GitHub</a>
                      <a href="https://bitbucket.org/martinjankov7/" className="btn black waves-effect waves-light" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> BitBucket</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}