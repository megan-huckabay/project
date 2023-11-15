// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        
          <Link to="/education">Education</Link>
        
          <Link to="/skills">Skills</Link>
       
          <Link to="/contact">Contact</Link>
        
      </ul>
    </nav>
  );
};

export default Navigation;
