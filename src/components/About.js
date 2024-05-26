//About.js Junze Ma 301342610 Sun May 26//

import React from 'react';
import myImage from './IMG_7187.JPG';
import badge from '../assets/linkedin_profile_image.png';
import './About.css'; 

function About() {
    return (
        <div className="about-container">
            <h1 className="section-title">About Me</h1>
            <img src={myImage} alt="Junze Ma" className="profile-image"/>
            <p><strong>Name:</strong> Junze Ma</p>
            <p><strong>Self Introduction:</strong> I am from China. Came to Toronto last September. Study the Artificial Intelligence AI Software Engineer direction program here. It’s a pleasure to meet everyone here and accumulate experience and learning time with everyone.</p>
            <a href="/Junze_Ma_Styled_Resume.pdf" target="_blank" rel="noopener noreferrer">Download My Resume</a>
            <div className="badge-container">
                <img src={badge} alt="Badge" className="badge-image" />
            </div>
        </div>
    );
}

export default About;
