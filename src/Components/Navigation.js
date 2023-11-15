// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        
          <Link to="/">Home</Link>
          
          <Link to="/About">About</Link>
        
          <Link to="/Education">Education</Link>
        
          <Link to="/PastExperience">Experience</Link>
        
      </ul>
    </nav>
  );
};

export default Navigation;
