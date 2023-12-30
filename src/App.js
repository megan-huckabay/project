import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';   
import Education from './Components/Education'; 
import Navigation from './Components/Navigation';  
import Experience from './Components/Experience';
import HireMe from './Components/HireMe';
import Contact from './Components/Contact';

function App() {
  return (
    <Router> 
      <header>
      <div className="app-container">
      <h1>Welcome to my Portfolio</h1>
      </div>
      </header>
      <div>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/HireMe" element={<HireMe    />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

        <Navigation />
      </div>
    </Router>
  );
}

export default App;
