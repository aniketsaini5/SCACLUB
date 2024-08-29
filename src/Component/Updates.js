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
                    <div className="update-item">
                        <h3 className="update-title">
                            <a href="#" onClick={(e) => { e.preventDefault(); handleOpenPopup('placement'); }}>Placement Drive</a>
                        </h3>
                        <p className="update-description">Details about upcoming placement drives, deadlines, and preparation tips.</p>
                    </div>
                    <div className="update-item">
                        <h3 className="update-title">
                            <a href="#" onClick={(e) => { e.preventDefault(); handleOpenPopup('events'); }}>Events</a>
                        </h3>
                        <p className="update-description">Information about upcoming events, guest lectures, and workshops.</p>
                    </div>
                    <div className="update-item">
                        <h3 className="update-title">
                            <a href="#" onClick={(e) => { e.preventDefault(); handleOpenPopup('hackathons'); }}>Hackathons</a>
                        </h3>
                        <p className="update-description">Details on upcoming hackathons, registration information, and prizes.</p>
                    </div>
                </div>
            </div>
            {popup.open && <Popup type={popup.type} onClose={handleClosePopup} />}
        </section>
    );
}

export default Updates;
