// Services.js Junze Ma 301342610 Sun May 26//

import React from 'react';
import badge from '../assets/linkedin_profile_image.png';

function Services() {
    return (
        <div>
            <h1>My Services</h1>
            <ul>
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>General Programming</li>
            </ul>
            <img src={badge} alt="Badge" style={{ width: '100px', height: '100px', marginTop: '20px' }} />
        </div>
    );
}

export default Services;
