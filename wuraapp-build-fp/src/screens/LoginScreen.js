import React, { useState } from "react";
import "./LoginScreen.css";
import wura from "../wura.jpeg";
import SignInScreen from "./SignInScreen.js";

function LoginScreen() {
  const [signIn, setSignin] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img className="logo_img" src={wura} alt="" />
        <button onClick={() => setSignin(true)} className="loginScreen_button">
          Log in
        </button>

        <div className="loginScreen_gradient"></div>
      </div>
      <div className="loginScreen_body">

        {signIn ? (<SignInScreen/>):(

            <>
             <h1>Tv Shows and More</h1>
        <h2>Watch Anytime and Cancel Subscription anytime</h2>
        <h3>
          Ready to Stream? Enter your email to Create account or restart
          Membership
        </h3>
        <div className="loginScreen_input">
          <form>
            <input type="email" placeholder="Enter your email" />
            <button
              onClick={() => setSignin(true)}
              className="loginScreen_getStarted"
            >
              GET STARTED
            </button>
          </form>
        </div>
            </>
        )}
       
      </div>
    </div>
  );
}

export default LoginScreen;
