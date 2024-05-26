//Contact.js Junze Ma 301342610 Sun May 26//

import React, { useState } from 'react';
import badge from '../assets/linkedin_profile_image.png';
import './Contact.css'; 

function Contact() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(form);
        
        setForm({
            firstName: '',
            lastName: '',
            contactNumber: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p><strong>Name:</strong> Junze Ma</p>
            <p><strong>Phone:</strong> 437-669-8484</p>
            <p><strong>Email:</strong> majunze8484@icloud.com</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="firstName" 
                    placeholder="First Name" 
                    value={form.firstName} 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name" 
                    value={form.lastName} 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    name="contactNumber" 
                    placeholder="Contact Number" 
                    value={form.contactNumber} 
                    onChange={handleChange} 
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email Address" 
                    value={form.email} 
                    onChange={handleChange} 
                />
                <textarea 
                    name="message" 
                    placeholder="Message" 
                    value={form.message} 
                    onChange={handleChange} 
                />
                <button type="submit">Send</button>
            </form>
            <img src={badge} alt="Badge" className="badge-image" />
        </div>
    );
}

export default Contact;
