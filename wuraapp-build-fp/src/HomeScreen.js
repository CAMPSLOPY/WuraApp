import React from 'react';
import "../src/HomeScreen.css";
import Nav from './Nav';
import Banner from '../src/Banner.js';
function HomeScreen() {
    return (
      <div className="homeScreen">
        <Nav />
        <Banner />
      </div>
    );

}

export default HomeScreen