import React, { useState } from "react";
import './Contact.css';

function Contact() {
    // State to control popup visibility
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const form = event.target;
        const data = new FormData(form);

        // Convert FormData to a JSON object
        const formDataObj = Object.fromEntries(data.entries());

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbxBnzPUjZYOubB6nlI39qyEq_SpfnaKy39cMEmpi-SLHW1VDtAuNEvFr4Tj8hFZQJgw/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(formDataObj)
            });

            const result = await response.json();
            if (result.status === 'success') {
                setShowPopup(true); // Show success popup
                setTimeout(() => setShowPopup(false), 2000); // Hide after 2 seconds
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            setShowPopup(true); // Show success popup
            setTimeout(() => setShowPopup(false), 2000);
        }

        form.reset();
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <h2 className="contact-heading">Contact Us</h2>
                <p className="contact-description">
                    Have any questions or need more information? Feel free to reach out to us!
                </p>
                <form className="contact-form" onSubmit={handleSubmit}>
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
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="contact-btn">Send Message</button>
                </form>
                {showPopup && <div className="popup">Message sent successfully!</div>}
            </div>
        </section>
    );
}

export default Contact;
