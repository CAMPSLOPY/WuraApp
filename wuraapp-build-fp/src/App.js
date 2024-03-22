import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const user = null;
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
