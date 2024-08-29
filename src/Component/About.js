import React from "react";
import './About.css';
import clubeLogo from './clube_logo.png'; 

function About() {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-image">
                    <img src={clubeLogo} alt="About" />
                </div>
                <div className="about-text">
                    <h2 className="about-heading">About Us</h2>
                    <p className="about-description">
                        Welcome to Coding Club! Our purpose is to help students code the future by providing valuable resources, updates on placement drives, events, hackathons, comprehensive notes.Our goal is to create an inclusive community where students can learn, grow, and succeed in their journey.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
