import "./SignInScreen.css";
import React, { useRef } from "react";
import { auth } from "../firebase";

function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
    .then((authUser) =>{
        console.log(authUser);
    })
    .catch((error)=>{
        alert(error.message);
    })
  };

  const signin = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current)
    .then((authUser) =>{
        console.log(authUser);
    }).catch((error)=>{
        alert(error.message);
    })
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="Email" placeholder="email" />
        <input ref={passwordRef} type="Password" placeholder="Password" />
        <button type="submit">Sign In</button>
        <h5>
          <span className="signUp_info">New to WURA? </span>
          <span className="signUp_link">Get in there Now!</span>
        </h5>
      </form>
    </div>
  );
}

export default SignInScreen;
