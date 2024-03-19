import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} 
from "react-router-dom";


function App() {
  return (
    <div className="App">
          
<Router>
<switch>
  <Router path="/test">
    <h1>wow whats up</h1>
  </Router>
<Route path="">
<HomeScreen/>
</Route>

</switch>

</Router>


    </div>
  );
}

export default App;
