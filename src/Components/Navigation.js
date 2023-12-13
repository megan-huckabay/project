import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-button">Home</Link>
          </li>
          <li>
            <Link to="/About" className="nav-button">About</Link>
          </li>
          <li>
            <Link to="/Education" className="nav-button">Education</Link>
          </li>
          <li>
            <Link to="/Experience" className="nav-button">Experience</Link>
          </li>
          <li>
            <Link to="/Contact" className="nav-button">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
