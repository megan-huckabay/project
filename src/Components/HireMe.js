import React from 'react';
import '../Styles/HireMe.css';

// Functional component
const HireMePage = () => {
    return (
        <div className="hire-me-container">
            <div className="hire-me-section">
                <h1>Greetings!</h1>
                <p>
                    As a seasoned web developer with a passion for creating innovative and user-centric web solutions.<br />
                    Are you in search of a skilled professional to elevate your online presence or empower your company with a cutting-edge web application? Look no further.
                </p>
            </div>
        

        <div className='service-container'>
            <div className="services-section">
                <h2>Services Offered:</h2>
                <p>
                    Single-Page and Multi-Page Applications: Tailored solutions designed to meet your unique requirements.<br />
                    Technological Expertise: Proficient in React.js, HTML/CSS, JavaScript, TypeScript, Node.js, and Express.js.<br />
                    Maintenance Packages: Ensure the longevity and optimal performance of your application with our flexible maintenance plans.<br />
                    Regular Updates: Stay on the cutting edge with our timely and efficient update services.
                </p>
            </div>
            <div className="specs-section">
                <h2>What I'll Need:</h2>
                <p>
                    A mock-up layout of what you would like your pages to look like<br />
                    (outlines on white paper with side notes of color scheme)<br />
                    Rough pdf of content for pages.<br />
                    Images if any<br />
                    Contact information.<br />
                </p>
            </div>
        </div>
        <div className='price-container'>
            <div className="pricing-section">
                <h2>Pricing Structure:</h2>
                <p>
                    Single-Page Applications: Starting at $150.00 (Negotiable based on complexity and customization).
                    Multi-Page Applications: Starting at $350.00.
                </p>
                <p>*Note: Prices are subject to adjustment based on project complexity and customization requirements.</p>
            </div>

            <div className="additional-services-section">
                <h2>Additional Services:</h2>
                <p>
                    Maintenance: Flat-rate plans available to keep your application running smoothly.<br />
                    Updates: Flat-rate packages for seamless integration of new features and improvements.
                </p>
            </div>
    </div>
            <div className='why-container'>
            <div className="why-choose-me-section">
                <h2>Why Choose Me:</h2>
                <p>
                    With a year of experience and a track record of successful projects.<br />
                    Client-Centric Approach: Your satisfaction is my priority, and I am committed to delivering solutions that exceed expectations.<br />
                    Transparent Pricing: Clear and competitive pricing with room for negotiation based on project specifics.<br />
                
                    Embark on a journey towards a digital future that reflects your unique identity or empowers your business.<br />
                    Let's collaborate to turn your ideas into immersive and functional web experiences.
                </p>
                <p>For inquiries and consultations, please contact me.</p>
                <p>I am eager to discuss how we can bring your project to fruition.<br /> Contact me at  <a href="mailto:techchick2023@gmail.com">techchick2023@gmail.com</a> to start the conversation.</p>
            </div>
        </div>
        </div>
    );
};

export default HireMePage;
