// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Navigation.css";

const Navigation = () => {
  return (
    <div className = "navigation-page">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Education">Education</Link>
          </li>
          <li>
            <Link to="/PastExperience">Experience</Link>
          </li>
          <li><Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
