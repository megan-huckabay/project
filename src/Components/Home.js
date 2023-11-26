// Home.js

import React from 'react';
import '../Styles/Home.css';
import profilePicture from '../images/me-oregon.jpg'; // Adjust the path to your profile picture

const Home = () => {
  return (
    <div className="home-container">
      <div className="picture-container">
        <img src={profilePicture} alt="profilePicture" />
      </div>
      <div className="content-container">

        <div className="home-section">
          <h2>Hi I'm <strong>Megan Huckabay</strong> but you can call me <strong>MEG</strong></h2>
          <p><strong>Greetings!</strong> I'm a 33-year-old California native, proud to call the Golden State my home. Those who know me best often describe me as the... <br />
          
          <strong>"The Person they can call when they need to laugh or just to talk at anytime, someone who sees the world as a whole, someone who will always find the good in a person/situation, who consistently seeks the silver lining even in the toughest of situations."</strong>.<br />
          
          Having witnessed the challenges of the homeless crisis in California, I firmly believe in the transformative power of KINDNESS and HOPE These are not just words but guiding principles that I carry with me in all aspects of life.On a professional note, I recently graduated from BloomTech Institute of Technology as a Full-Stack Web Developer. Now, I invite you to explore the pages of my digital home, where you can learn more about my journey and the projects that define my passion for technology.
          Thank you for visiting, and I hope you enjoy navigating through the various facets of my story.</p>
        </div>
        <div className="contact-section">
          <h3>Contact Information</h3>
          <p>main-email: <a href="mailto:techchick2023@gmail.com">techchick2023@gmail.com</a></p>

          <p>alternative-email: <a href="mailto:huckabay90@gmail.com">huckabay90@gmail.com</a></p>

          <p>GitHub:  <a href="https://github.com/meggers1990">GitHub</a></p>

          <p>LinkedIn: <a href="https://linkedin.com/in/megan-huckabay">LinkedIn</a></p>

          <p>Resume Link: <a href="https://docs.google.com/document/d/1d84juiC488FZ55L0Wioiz5BCJ5KyngAjabOw17EoqIc/edit?usp=sharing">Click for Resume</a></p>
        </div>
      </div>
    </div>
  );
};

export default Home;
