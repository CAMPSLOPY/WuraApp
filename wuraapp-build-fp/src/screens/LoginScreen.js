import React from "react";
import "./LoginScreen.css";
import wura from '../wura.jpeg';
import mov_bg from "../movie-bg.jpg";
function LoginScreen() {
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img className="logo_img"
          src={wura}
          alt=""
        />
        <button className='loginScreen_button'>
            Log in</button>

            <div className="loginScreen_gradient"></div>
      </div>
      <div className="loginScreen_body">
<h1>Tv Shows and More</h1>
<h2>Watch Anytime and Cancel Subscription anytime</h2>
<h3>
    Ready to Stream? Enter your email to Create account or restart Membership
</h3>

      </div>
    </div>
  );
}

export default LoginScreen;
