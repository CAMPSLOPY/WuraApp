import React from 'react';
import "./Banner.css";
function Banner() {

    function truncate(string, n){
return string?.length > n ? string.substring(0, n - 1)+ "..." : string;

    }
    return (
        <header className="banner" style={{
            backgroundImage: `url("https://www.shutterstock.com/image-vector/humpolec-czech-republic-january-23-260nw-2272947519.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">MovieName</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_desc">
                    This is a test Description
                </h1>
            </div>
            <div className="banner_fade"></div>
        </header>
    );
}

export default Banner;