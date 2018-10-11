import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Landing from './Landing.js'
import Footer from './Footer.js'

class Home extends Component {
  render() {
    return (
      <div>
       <nav class="navbar navbar-light bg-dark">
        <a class="navbar-brand" href="#">Flat Top Eats</a>
        <p>TODO: add logo, links to social media, responsive nav bar</p>
       </nav>
        <div className="container">
          <Landing />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
