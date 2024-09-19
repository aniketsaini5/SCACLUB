import React, { useEffect } from 'react';
import './Popup.css';
import imge from './placement-img/image.png';
import img2 from './placement-img/image2.png';
import pdf from './resource/Job Description __ Business Development.pdf';

const Popup = ({ type, onClose }) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.className === 'popup-overlay') {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    const renderContent = () => {
        switch (type) {
            case 'events':
                return (
                    <>
                        {/* <h2 className="popup-title">Event</h2>
                        <h3 className="popup-subtitle-event">
                            <span className="popup-title-left">Engineering Day</span>
                            <span className="popup-title-right">
                                <i><small className="Date">13 September 2024</small></i>
                            </span>
                        </h3>

                        <img src={image} alt="engineering day" className="popup-image" />

                        <p className="popup-description" >Lineup of events:
                            <ul>
                                <li>Syntax Sprint (Coding Relay) 💻</li>
                                <li> Artificial Hilarious (Stand-Up Comedy) 🎤</li>
                                <li> Creation in Motion (Model Exhibition) 🏗️ </li>
                                <li>Inspire and Create (Slogan Writing) ✍️</li>
                                <li>Treasure Hunt</li>
                            </ul>
                            <hr></hr>
                            🗓️ Date: 13th September<br></br>
                            
                            </p>

                        <div className="popup-links">
                            <a href="https://forms.gle/7jVuNSh9GCEivoAA9" disabled target="_blank" rel="noopener noreferrer" className="popup-link">
                                Register Closed
                            </a>
                            <a href={pdf} target="_blank" rel="noopener noreferrer" className="popup-link" id="rulebook" download={pdf}>
                                Download Rulebook
                            </a>
                        </div> */}


                        <h2 className="popup-title">Upcoming Events</h2>
                        <h3 className="popup-subtitle">Fresher Party</h3>
                        <p className="popup-description"><i>-update soon</i></p>
                    </>
                );
            case 'hackathons':
                return (
                    <>
                        <h2 className="popup-title">Hackathon</h2>
                        <img src="https://pps.whatsapp.net/v/t61.24694-24/458495546_919264830032610_4756055277738111373_n.jpg?ccb=11-4&oh=01_Q5AaILNC67TsPFwR3rVBX9w_8_llKVBfxQZUXD1LZJQEUsBb&oe=66F82DBB&_nc_sid=5e03e0&_nc_cat=105" alt="Hackathon" className="popup-image" />
                        <h3 className="popup-subtitle">Innovortex 2.0</h3>
                        <p className="popup-description">CInnoVortex 2.0 – Registrations Now Open! 🚀<br></br>

                            We are excited to announce that registrations are now open for InnoVortex 2.0, and we invite you to participate in this thrilling event! It’s time to bring your ideas, skills, and energy to the table and showcase your talents.<br></br>
                            <hr></hr>

                            Follow these simple steps to register:
                            <hr></hr>

                            1️⃣ Step 1: Register on HackQuest using the link below.<br></br>
                            2️⃣ Step 2: Create your Open Campus ID using the following link:<br></br>
                            <p></p>
                            <p></p>
                            <a  className="popup-link" href="https://id.opencampus.xyz/referral/hackquest">LINK OF CAMPUS ID</a><br></br>
                            <p></p>
                            <p></p>

                            <i> Deadline: 20th September 2024 </i><br></br>
                            Registration Link:<br></br>
                            <p></p>
                            <p></p>
                    
                            <a className="popup-link" href="https://www.hackquest.io/en/hackathon/explore/InnoVortex-2O">Registration Link</a><br></br>
                            <p></p>
                            <p></p>
                            <hr></hr>
                            Here are the participation categories:
                            <hr></hr>

                            1️⃣ Ideathon – For freshers (1st year) who are full of ideas but don’t have coding experience. 💡<br></br>
                            2️⃣ Reimagine – For intermediates (1st & 2nd year) who are ready to rethink and rebuild. 🔄<br></br>
                            3️⃣ Hackathon – For coding experts (2nd, 3rd & 4th year) eager to flex their skills. 💻⚡️<br></br>
                            <hr></hr>

                            Don’t miss out on this amazing opportunity – register now and take your first step toward innovation and success!
                            <hr></hr>
                            <p></p>
                            <p></p>

                            Join the WhatsApp group for details about innoVortex 2.0<br></br>
                            <a className="popup-link" href="https://chat.whatsapp.com/BXgbGaBhEDx2U72D85CV85">JOIN WHATAPP</a><br></br>
                            <hr></hr>
                            Social links 🖇️<br></br>
                            <p></p>
                            <p></p>

                            <a className="popup-link" href="https://www.instagram.com/aniketsaini_5/">for more Details content me </a><br></br>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            Best regards,<br></br>
                            TechNeeds Society, IGDTUW</p>
                        {/* <a href="https://unstop.com/hackathons/amazon-ml-challenge-amazon-1100713" target="_blank" rel="noopener noreferrer" className="popup-link">More Details</a>

                        <h2 className="popup-title">Hackathon</h2>
                        <h3 className="popup-subtitle">Upcoming</h3> */}
                    </>
                );
            case 'placement':
                return (
                    <>
                        <h2 className="popup-title">Placement Drive</h2>
                        <ul className="popup-list">
                            <li className="popup-list-item">
                                <h3 className="popup-subtitle">	 	Edu-Versity</h3>
                                <img src={imge} alt="Edu-Versity" className="popup-image" />
                                <div className="popup-list-item-content">
                                    <p><i><strong>NOTE : </strong></i><small>Fillup the form thought offical email id</small></p>
                                    <div className="popup-links">
                                        <a href="https://forms.gle/dRn8NsoU47mY2BYXA" disabled target="_blank" rel="noopener noreferrer" className="popup-link">
                                            Register Link
                                        </a>
                                        <a href={pdf} target="_blank" rel="noopener noreferrer" className="popup-link" id="jobrole" download={pdf}>
                                            Download JobRole Pdf
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <hr></hr>

                            <li className="popup-list-item">
                                <h3 className="popup-subtitle">	 Josh Technology Group</h3>
                                <img src={img2} alt="CVENT" className="popup-image" />
                                <div className="popup-list-item-content">
                                    <p><i><strong>NOTE : </strong></i><small>Fillup the form thought offical email id</small></p>
                                    <a href="https://geetauniversity.pod.ai/d/yykZdC/placement-registrations/qaDMS4I0bYNtM05XJl_w7CnEg2HeL-LIsTNkPmMeyy76Igcq7pEYc9eHpUCvFeTbmQYT93OIVR7ccquqqeyUDQ/7b5ce5ec31de8453fd2119893c005a12cc2ef1ce/" target="_blank" rel="noopener noreferrer" className="popup-link">Register Now</a>
                                </div>
                            </li>

                            {/* Add more companies as needed */}
                        </ul>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                {renderContent()}
                <button className="popup-close" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Popup;
