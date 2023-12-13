import React from 'react';
import "../Styles/Education.css";

const Education = () => {
    return (
        <div className="education-container education-page">
            <h1>Education</h1>
            <div className="school-section">
                {/* <img src="certificate-image.jpg" alt="Certificate Image" /> */}
                <h2><strong>Full-stack Software Development Program</strong></h2>
                <p><b>February 2023 - October 2023</b></p>
                <p>
                    <b>Graduated with proficiency in front-end and back-end development,
                    including technologies such as HTML, CSS, JavaScript, and
                    database management.</b>
                </p>
                <h2><strong>GCA (General Coding Assessment)</strong></h2>
                <p><b>Score: 706</b></p>
            </div>

            <div className="skills-container">
                <div className="frontend-section">
                    <strong>Front-End Development:</strong>
                    <ul>
                        <b>HTML5 <br/ >
                        CSS (Cascading Style Sheets)<br/ >
                        JavaScript<br/ >
                        User Interface Design<br/ >
                        npm (Node Package Manager)<br/ >
                        Version Control/Github<br/ >
                        Jest (for React.js)<br/ >
                        Testing Library (e.g., React Testing Library)<br/ >
                        Fetch API<br/ >
                        Async/Await<br/ >
                        Web Accessibility (WCAG)<br/ ></b>
                    </ul>
                </div>
                <div className="backend-section">
                    <strong>Back-End Web Development:</strong>
                    <ul>
                        <b>Node.js<br />
                        Express.js<br />
                        SQL (Database Management)<br />
                        RESTful API Design<br />
                        Authentication and Authorization<br />
                        Middleware (Express.js)<br />
                        GraphQL<br />
                        WebSockets (Real-time Communication)<br />
                        Testing (e.g., Jest)<br />
                        CI/CD (Continuous Integration/Continuous Deployment)</b>
                    </ul>
                </div>
            </div>

            <div className="skills2-container">
                <div className="tech-section">
                    <strong>Libraries and Technologies:</strong><br />
                    <ul>
                        <b>JavaScript Libraries<br />
                        Axios<br />
                        Redux.js<br />
                        Heroku<br />
                        JSON<br />
                        TypeScript<br />
                        Microsoft Visual Studio Code<br />
                        React.js<br />
                        Express.js<br />
                        Webpack<br /></b>
                    </ul>
                </div>
                <div className="other-section">
                    <strong>Other Skills:</strong><br />
                    <ul>
                        <b>REST APIs<br />
                        Programming<br />
                        Debugging<br />
                        Software<br />
                        Query Writing<br />
                        Problem Solving<br />
                        Markup Languages<br />
                        Network Security<br />
                        User Experience (UX)<br />
                        User Authentication<br /></b>
                    </ul>
                </div>
            </div>

            <div className="github-container">
                <div className="repo1-section">
                <h2>Asylum Project</h2><br />
                <p>
                    In these projects, I contributed significantly to the development of a landing page, frontend API integration, and Auth0 integration. For the landing page, my focus was on creating a responsive layout matching a provided screenshot. I implemented React code in RenderLandingPage.jsx and corresponding styles in RenderLandingPage.less, adhering to specific import instructions and ensuring compatibility with Node version 16.16.0. The second project involved the integration of an API into the frontend, specifically in the modification of GraphWrapper.jsx and related data visualizations. I successfully transitioned the application to fetch data from the provided API link <u>(https://hrf-asylum-be-b.herokuapp.com/cases)</u>, ensuring the proper rendering of graphs on the Graphs page. Lastly, for Auth0 integration, I followed the provided guide to seamlessly incorporate the Auth0 microservice into the project. I established a Profile Page visible in the navigation menu only when a user is logged in, displaying essential user information. Additionally, I implemented a Login/Logout button in the navigation menu, facilitating a smooth redirection to Auth0 for the authentication process. Throughout these endeavors, I maintained the integrity of main files, ensuring the projects rendered correctly and functioned seamlessly.<br />

                    Repository Link: <a href="https://github.com/meggers1990/asylum-rg-fe-starter.git" target="_blank" rel="noopener noreferrer">Click Here</a>
                </p>
                </div>

                <div className="repo2-section">
                <h2>Bloomtech Eats Project</h2><br />
                <p>
                    Throughout this challenge, I successfully set up a functional button on Bloomtech Eats' homepage, guiding users to a "build your own pizza" custom form. After forking the repository and diligently committing changes on the main branch, I ensured the project adhered to React Router V6 standards. The homepage featured a distinct "/" route with an "order-pizza" button linked to the pizza order form. The form, accessed via the "/pizza" route, was equipped with essential components: a name input field with validation, a dropdown for pizza size, a topping checklist, and a special instructions input. The "Add to Order" button, identified as "order-button," facilitated form submission, generating a database record encompassing name, size, toppings, and special instructions. Cypress tests were implemented to verify text input, topping selection, and successful form submission. As part of stretch goals, I introduced a gluten-free crust toggle, nested routes for form elements, additional Cypress tests, error handling for network issues, and extended functionality for the order button, redirecting users to a "Congrats! Pizza is on its way!" page while recording a comprehensive database order record. Commits were made regularly, ensuring code quality and professionalism. This comprehensive approach addressed both project requirements and optional stretch goals.<br />

                    Repository Link: <a href="https://github.com/meggers1990/web-sprint-challenge-single-page-applications.git" target="_blank" rel="noopener noreferrer">Click Here</a>
                </p>
                </div>
            </div>



        </div >
    );
};

export default Education;

