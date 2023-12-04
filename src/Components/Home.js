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
          <h2><strong>Hello there!</strong></h2>
          <p><br /><br /> Ready to embark on a virtual journey into the depths of my digital domain?<br /> I'm Megan Huckabay, your friendly guide<br /> <li>or just<strong> Meg</strong> if you're feeling casual.</li> <br/> Now that we've got the introductions sorted,<br /> let's explore the intricacies of this React.js wonderland I've concocted.<br /> Sprinkled at the summit and base of each page,<br /> you'll discover buttons itching to whisk you away to sections that peel back the layers of my personality,<br /> unveiling the real me – quirks, passions, and all.<br />

          <strong>Imagine this:</strong> perched atop the education page,<br /> a snapshot of my academic triumphs comes to life.<br /> Feast your eyes on the <strong>BloomTech Institute of Technology</strong> certificate,<br /> standing tall beside my GCA score.<br /> But that's not all – a carefully curated list of web development skills awaits,<br /> ready to impress.<br /> As you navigate through the tales of my past professional exploits,<br /> brace yourself for a contact page that reads like a treasure map.<br /> <strong>Email coordinates, LinkedIn links, resume routes, and GitHub trails</strong><br /> <li>your key to unraveling the web of projects I've spun during my web development escapades.</li><br />

          So, fasten your seatbelt and enjoy the journey!<br /> Whether you're keen on unraveling more mysteries or just in the mood for a good laugh,<br /> feel free to drop me an email or connect on LinkedIn.<br /><br /><strong>Cheers!</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Home;
