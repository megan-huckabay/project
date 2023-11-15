import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';   
import Education from './Components/Education'; 
import Navigation from './Components/Navigation';
import Skills from './Components/PastExperiance';  

function App() {
  return (
    <Router>
      <div>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
