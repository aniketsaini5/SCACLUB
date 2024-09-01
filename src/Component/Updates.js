import React, { useState } from "react";
import './Update.css';
import Popup from './Popup';

function Updates() {
    const [popup, setPopup] = useState({ open: false, type: '' });

    const handleOpenPopup = (type) => {
        setPopup({ open: true, type });
    };

    const handleClosePopup = () => {
        setPopup({ ...popup, open: false });
    };

    return (
        <section id="updates" className="updates">
            <div className="updates-container">
                <h2 className="updates-heading">Updates</h2>
                <div className="updates-content">
                    <div 
                        className="update-item"
                        onClick={() => handleOpenPopup('placement')}
                    >
                        <h3 className="update-title">Placement Drive</h3>
                        <p className="update-description">
                            Details about upcoming placement drives, deadlines, and preparation tips.
                        </p>
                    </div>
                    <div 
                        className="update-item"
                        onClick={() => handleOpenPopup('events')}
                    >
                        <h3 className="update-title">Events</h3>
                        <p className="update-description">
                            Information about upcoming events, guest lectures, and workshops.
                        </p>
                    </div>
                    <div 
                        className="update-item"
                        onClick={() => handleOpenPopup('hackathons')}
                    >
                        <h3 className="update-title">Hackathons</h3>
                        <p className="update-description">
                            Details on upcoming hackathons, registration information, and prizes.
                        </p>
                    </div>
                </div>
            </div>
            {popup.open && <Popup type={popup.type} onClose={handleClosePopup} />}
        </section>
    );
}

export default Updates;
