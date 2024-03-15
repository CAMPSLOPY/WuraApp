import React from 'react';
import "../src/HomeScreen.css";
import Nav from './Nav';
function HomeScreen() {
    return (
      <div className="homeScreen">
        <Nav />
        <Banner />
      </div>
    );

}

export default HomeScreen