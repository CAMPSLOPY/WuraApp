import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
BrowserRouter as Router,Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      
<Router>
<Routes>
<Route path='/' exact Component={HomeScreen}/>
</Routes>
</Router>
    </div>
  );
}

export default App;
