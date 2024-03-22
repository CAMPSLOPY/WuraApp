import React from "react";
import "./HomeScreen.css";
import Nav from "../Nav.js";
import Banner from "../Banner.js";
import requests from "../Request.js";
import Row from "../Row.js";
function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title="WURA ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="WURA Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="WURA Highly Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="WURA Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="WURA Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="WURA Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="WURA Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="WURA Docu Series" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
