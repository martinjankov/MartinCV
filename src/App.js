import React, { Component } from 'react';

import { Public } from './layouts';
import { Header, ScrollTop } from './containers';
import { Navigation, Banner, AboutMeSection, SkillsSection, ProgressBar, Row, ServicesSection, ServiceBox, PortfolioSection, ProjectBox, Footer  } from './components';

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
            <ProgressBar percentage='60' title='LARAVEL 5'/>
            <ProgressBar percentage='80' title='JQUERY'/>
            <ProgressBar percentage='40' title='REACT JS'/>
            <ProgressBar percentage='35' title='REACT NATIVE'/>
          </Row>
          <Row label='CMS'>
            <ProgressBar percentage='90' title='WORDPRESS'/>
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
            <ProgressBar percentage='50' title='Apache, nginx'/>
            <ProgressBar percentage='50' title='DigitalOcean (Apache, nginx)'/>
          </Row>
          <Row label='Tracking Tools'>
            <ProgressBar percentage='99' title='JIRA'/>
            <ProgressBar percentage='99' title='TRELLO'/>
            <ProgressBar percentage='99' title='ASANA'/>
          </Row>
        </SkillsSection>
        <ServicesSection>
          <ServiceBox title="Back-End Development" icon="lnr-cog" description="PHP, Laravel 5, Wordpress, Wordpress Themes, Wordpress Plugins"/>
          <ServiceBox title="Front-End Development" icon="lnr-code" description="Javascript, jQuery, React JS"/>
          <ServiceBox title="Web Design" icon="lnr-pencil" description="CSS3, SASS, Bootstrap"/>
        </ServicesSection>
        <PortfolioSection description="Some of the projects I have worked on over the years. For more please check my CV and LinkedIn profile">
        <ProjectBox 
            title="LitUp Legal" 
            link="https://lituplegal.com/" 
            image="/images/projects/litup-legal.png"
            description="Back-end -> Laravel API, Front-end Dev: Gjorge Karakabakov"
            companyLink="https://www.karakabakov.com/"
            companyName="Private with Gjorge Karakabakov"/>
          <ProjectBox 
            title="Blackfriday - Lexpress" 
            link="https://blackfriday.lexpress.fr" 
            image="/images/projects/blackfriday-lexpress.png"
            description="PHP, Wordpress, Wordpress Themes, Wordpress Plugins, Visual Composer Custom Elements HTML, CSS, Javascript, jQuery, Git"
            companyLink="http://www.global-savings-group.com"
            companyName="Global Savings Group"/>
          <ProjectBox 
            title="Blackfriday - DailyMail" 
            link="https://blackfriday.dailymail.co.uk" 
            image="/images/projects/blackfriday-dailymail.png"
            description="PHP, Wordpress, Wordpress Themes, Wordpress Plugins, Visual Composer Custom Elements HTML, CSS, Javascript, jQuery, Git"
            companyLink="http://www.global-savings-group.com"
            companyName="Global Savings Group"/>
          <ProjectBox 
            title="Worldlifestyle" 
            link="https://www.worldlifestyle.com" 
            image="/images/projects/worldlifestyle.png"
            description="PHP, Wordpress, Wordpress Themes, Wordpress Plugins, HTML, CSS, Javascript, jQuery, Git"
            companyLink="http://www.cosmicdevelopment.com"
            companyName="Cosmic Development"/>
          <ProjectBox 
            title="Ezras Donation Site" 
            link="https://www.ezrascholim.org" 
            image="/images/projects/ezrascholim.png"
            description="Laravel, Payment Gateway, Git"
            companyLink="http://www.cosmicdevelopment.com"
            companyName="Cosmic Development"/>
        </PortfolioSection>
        <Footer>
          <ScrollTop />
        </Footer>
      </Public>
    );
  }
}

export default App;
