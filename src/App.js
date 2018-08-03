import React, { Component } from 'react';

import { Public } from './layouts';
import { Header } from './containers';
import { Navigation, Banner, AboutMeSection, SkillsSection, ProgressBar, Row  } from './components';

class App extends Component {
  render() {
    return (
      <Public>
        <Header>
          <Navigation />
        </Header>
        <Banner
          imgUrl='/images/martincv-big-cover.jpg'
          userName='Martin Jankov'
          shortDescription='Making Ideas Happen' />
        <AboutMeSection />
        <SkillsSection>
          <Row label='Programming Languages'>
            <ProgressBar percentage='90' title='PHP'/>
            <ProgressBar percentage='75' title='JAVASCRIPT'/>
          </Row>
          <Row label='Frameworks'>
            <ProgressBar percentage='60' title='LARAVEL'/>
            <ProgressBar percentage='80' title='JQUERY'/>
            <ProgressBar percentage='40' title='REACT JS'/>
            <ProgressBar percentage='35' title='REACT NATIVE'/>
          </Row>
          <Row label='CMS'>
            <ProgressBar percentage='85' title='WORDPRESS'/>
          </Row>
          <Row label='Databases'>
            <ProgressBar percentage='60' title='MYSQL'/>
          </Row>
          <Row label='Version Control'>
            <ProgressBar percentage='70' title='GIT'/>
            <ProgressBar percentage='70' title='GITHUB'/>
            <ProgressBar percentage='70' title='BITBUCKET'/>
          </Row>
          <Row label='Style'>
            <ProgressBar percentage='65' title='CSS3'/>
            <ProgressBar percentage='65' title='SASS'/>
            <ProgressBar percentage='80' title='BOOTSTRAP'/>
          </Row>
          <Row label='Server'>
            <ProgressBar percentage='50' title='Linux'/>
            <ProgressBar percentage='50' title='DigitalOcean'/>
          </Row>
          <Row label='Tracking Tools'>
            <ProgressBar percentage='99' title='JIRA'/>
            <ProgressBar percentage='99' title='TRELLO'/>
            <ProgressBar percentage='99' title='ASANA'/>
          </Row>
        </SkillsSection>
      </Public>
    );
  }
}

export default App;
