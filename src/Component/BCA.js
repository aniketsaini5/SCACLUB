import React from 'react';
import './BCA.css';  // Import the CSS file

function BCA() {
    return (
        <div className="bca-container">
            <h2 className="bca-heading">Notes for BCA</h2>
            <ul className="bca-notes-list">
                <li className="bca-note-item">
                    <a href="/path/to/notes/bca/subject1.pdf" download>C Notes</a>
                </li>
                <li className="bca-note-item">
                    <a href="/path/to/notes/bca/subject2.pdf" download>HTML Notes</a>
                </li>
                <li className="bca-note-item">
                    <a href="/path/to/notes/bca/subject3.pdf" download>CSS Notes</a>
                </li>
                {/* Add more items as needed */}
            </ul>
        </div>
    );
}

export default BCA;
