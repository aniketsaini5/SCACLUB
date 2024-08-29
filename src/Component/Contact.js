// src/Contact.js
import React from "react";
import './Contact.css';

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <h2 className="contact-heading">Contact Us</h2>
                <p className="contact-description">
                    Have any questions or need more information? Feel free to reach out to us!
                </p>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" cols='10' required></textarea>
                    </div>
                    <button type="submit" className="contact-btn">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
