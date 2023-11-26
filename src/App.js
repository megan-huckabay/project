import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';   
import Education from './Components/Education'; 
import Navigation from './Components/Navigation';  
import PastExperience from './Components/PastExperience';

function App() {
  return (
    <Router>
      <h1>Hello Everybody and Welcome to my Portfolio</h1>
      <h6>(NOW CLICK THE BUTTONS BELOW TO NAVIGATE THREW THE PAGES)</h6>
      <div>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/PastExperience" element={<PastExperience />} />
        </Routes>

        <Navigation />
      </div>
    </Router>
  );
}

export default App;
