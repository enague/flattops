import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../scss/index.scss';

import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Landing from './Landing';
import Menu from './Menu';
import Nav from './Nav';
import Order from './Order';
import { P1, P2, P3 } from './Parallax'


class Home extends Component {
  render() {
    return (
      <div>
       <Nav />
       <Landing />
        <div>
          <About />
          <P1 />
          <Menu />
          <P2 />
          <Order />
          <P3 />
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
