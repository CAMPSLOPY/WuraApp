import React from 'react';
import "../src/HomeScreen.css";
import Nav from './Nav';
import Banner from '../src/Banner.js';
import requests from './Request.js';
import Row from '../src/Row.js';
function HomeScreen() {
    return (
      <div className="homeScreen">
        <Nav />
        <Banner />
        <Row
        title = "WURA ORIGINALS"
        fetchUrl = {requests.fetchNetflixOriginals}
        isLargerRow
        />
        <Row
        title = "Trending Now"
        fetchUrl = {requests.fetchTrending}
        />
        <Row
        title = "Highly Rated"
        fetchUrl = {requests.fetchTopRated}
        />
        <Row
        title = "Action Movies"
        fetchUrl = {requests.fetchActionMovies}
        />
        <Row
        title = "Comedy Movies"
        fetchUrl = {requests.fetchComedyMovies}
        />
        <Row
        title = "Horror Movies"
        fetchUrl = {requests.fetchHorrorMovies}
        />
        <Row
        title = "Romance Movies"
        fetchUrl = {requests.fetchRomanceMovies}
        />
        <Row
        title = "Docu Series"
        fetchUrl = {requests.fetchDocumentaries}
        />
      </div>
    );

}

export default HomeScreen