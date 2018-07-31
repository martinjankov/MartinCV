import React, { Component } from 'react';
import { Public } from './layouts';
import { Header, Navigation, Banner } from './components';

class App extends Component {
  render() {
    return (
      <Public>
        <Header>
          <Navigation />
        </Header>
        <Banner 
          imgUrl='/images/martincv-cover.jpg' 
          userName='Martin Jankov'
          shortDescription='Specialising in customer experiences &amp; brand development, we combine digital craftsmanship with innovative thinking to deliver.'/>
      </Public>
    );
  }
}

export default App;
