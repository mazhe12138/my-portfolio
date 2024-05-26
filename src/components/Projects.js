//Projects.js Junze Ma 301342610 Sun May 26//

import React from 'react';
import badge from '../assets/linkedin_profile_image.png';
import './Projects.css'; 

function Projects() {
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div>
                <h2>Car Wash Website</h2>
                <img src="/Fine-Shine-1.jpg" alt="Car Wash Website" />
                <p>This is a car wash website I made. It is specially used for online reservations so that the time between customers and employees can be adjusted. Employees can directly get text messages through the backend platform and can look at the time schedule to make work arrangements. Customers can directly Make an appointment and receive a text message.</p>
            </div>
            <div>
                <h2>Script Kill</h2>
                <img src="/072637_OkPDQNxI.jpg" alt="Script Kill" />
                <p>This is a script-killing project I did. Many people use the script to experience the game in a dense room, using music, temperature, body sensation, etc. It brings people into the script, travels to different times, and experiences the scenes and feelings at that time.</p>
            </div>
            <div>
                <h2>Business Consulting</h2>
                <img src="/images.jpeg" alt="Business Consulting" />
                <p>This is my consulting management project. I conduct research by connecting with the middle and senior management of the company. I diagnose the company's internal problems and collaborate with everyone.</p>
            </div>
            <img src={badge} alt="Badge" className="badge-image" />
        </div>
    );
}

export default Projects;
