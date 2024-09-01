import React, { useEffect } from 'react';
import './Popup.css';
import imge from './placement-img/image.png';

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
                        <h2 className="popup-title">Upcoming Events</h2>
                        <h3 className="popup-subtitle">Engineering Day</h3>
                        <p className="popup-description"><i>-update soon</i></p>
                    </>
                );
            case 'hackathons':
                return (
                    <>
                        {/* <h2 className="popup-title">Hackathon</h2>
                        <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/66bf9bfd9347a_code-red.webp?d=1920x557" alt="Hackathon" className="popup-image" />
                        <h3 className="popup-subtitle">Code Red</h3>
                        <p className="popup-description">Click on More Details for more information about the hackathon, including registration and prizes.</p>
                        <a href="https://unstop.com/hackathons/code-red-nitk-surathkal-1126425" target="_blank" rel="noopener noreferrer" className="popup-link">More Details</a> */}
                        
                        <h2 className="popup-title">Hackathon</h2>
                        <h3 className="popup-subtitle">Upcoming</h3>
                    </>
                );
            case 'placement':
                return (
                    <>
                        <h2 className="popup-title">Placement Drive</h2>
                        <ul className="popup-list">
                            <li className="popup-list-item">
                                <h3 className="popup-subtitle">	 CVENT</h3>
                                <img src={imge} alt="Goldman Sachs" className="popup-image" />
                                <div className="popup-list-item-content">
                                    <p className="popup-description">
                                        <ul>
                                            <li>Registration only done by your respective official Mail ID </li>
                                            <li>Register by 2 September till 10AM</li>
                                            <li>JD for this role attached to this mail, please read it carefully before applying</li>
                                        </ul>
                                    </p>
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
