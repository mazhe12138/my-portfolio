//Home.js Junze Ma 301342610 Sun May 26//

import React from 'react';
import { Link } from 'react-router-dom';
import badge from '../assets/linkedin_profile_image.png';
import './Home.css'; 

function Home() {
    return (
        <div className="home-container">
            <h1 className="welcome-title">Welcome to Junze Ma’s website</h1>
            <p className="mission-statement">Don’t forget your original intention and move forward silently</p>
            <p className="intro-text">This is the Junze Ma.</p>
            <Link to="/about">
                <button className="learn-more-button">Learn More About Me</button>
            </Link>
            <div className="badge-container">
                <img src={badge} alt="Badge" className="badge-image" />
            </div>
        </div>
    );
}

export default Home;
