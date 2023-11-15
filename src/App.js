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
      <div>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/PastExperience" element={<PastExperience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
