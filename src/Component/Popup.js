import React, { useEffect } from 'react';
import './Popup.css';
import imge from './placement-img/image.png';
import image from './resource/img.jpeg';
import pdf from './resource/Rule Book.pdf';

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
                        <h2 className="popup-title">Event</h2>
                        <h3 className="popup-subtitle-event">
                            <span className="popup-title-left">Engineering Day</span>
                            <span className="popup-title-right">
                                <i><small className="Date">14 September 2024</small></i>
                            </span>
                        </h3>

                        <img src={image} alt="engineering day" className="popup-image" />

                        <div className="popup-links">
                            <a href="https://forms.gle/7jVuNSh9GCEivoAA9" target="_blank" rel="noopener noreferrer" className="popup-link">
                                Register Now
                            </a>
                            <a href={pdf} target="_blank" rel="noopener noreferrer" className="popup-link" id="rulebook" download={pdf}>
                                Download Rulebook
                            </a>
                        </div>


                        {/* <h2 className="popup-title">Upcoming Events</h2>
                        <h3 className="popup-subtitle">Engineering Day</h3>
                        <p className="popup-description"><i>-update soon</i></p> */}
                    </>
                );
            case 'hackathons':
                return (
                    <>
                        <h2 className="popup-title">Hackathon</h2>
                        <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-66ab7658502ef_listing_image_ml_challenge__1_.jpg?d=200x2007" alt="Hackathon" className="popup-image" />
                        <h3 className="popup-subtitle">Amazon ML</h3>
                        <p className="popup-description">Click on More Details for more information about the hackathon, including registration and prizes.</p>
                        <a href="https://unstop.com/hackathons/amazon-ml-challenge-amazon-1100713" target="_blank" rel="noopener noreferrer" className="popup-link">More Details</a>

                        {/* <h2 className="popup-title">Hackathon</h2>
                        <h3 className="popup-subtitle">Upcoming</h3> */}
                    </>
                );
            case 'placement':
                return (
                    <>
                        <h2 className="popup-title">Placement Drive</h2>
                        <ul className="popup-list">
                            <li className="popup-list-item">
                                <h3 className="popup-subtitle">	 CVENT</h3>
                                <img src={imge} alt="CVENT" className="popup-image" />
                                <div className="popup-list-item-content">
                                    <p><i><strong>NOTE : </strong></i><small>Fillup the form thought offical email id</small></p>
                                    <a href="https://forms.gle/qKfz4mCkEWRWxKdcA" target="_blank" rel="noopener noreferrer" className="popup-link">Register Now</a>
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
