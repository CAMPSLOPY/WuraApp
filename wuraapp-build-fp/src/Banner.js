import React, { useEffect, useState} from 'react';
import "./Banner.css";
import axios from "./axios";
import requests from "./Request";




function Banner() {

    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fecthData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request;
        }
        fecthData();
    },[])

console.log(movie)

    function truncate(string, n){
return string?.length > n ? string.substring(0, n - 1)+ "..." : string;

    }
    return (
        <header className="banner" style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_desc">
                    {truncate(movie?.overview, 200)}
                </h1>
            </div>
            <div className="banner_fade"/>
        </header>
    );
}

export default Banner;