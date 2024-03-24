import { useEffect } from "react";
import React  from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { logout } from "./features/userSlice";
import { useDispatch } from "react-redux";

function App() {
  const user = null;
const dispatch = useDispatch();


  useEffect(() =>{
const usb = auth.onAuthStateChanged((userAuth) => {
  if(userAuth){
    // Logged in
    console.log(userAuth);
  }
  else{
    //logged out
    dispatch(logout);
  }
});
return usb;

  },[]);
  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" exact Component={HomeScreen} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
