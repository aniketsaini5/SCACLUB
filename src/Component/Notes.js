import React from "react";
import './Notes.css';

function Notes() {
    return (
        <section id="notes" className="notes">
            <div className="notes-container">
                <h2 className="notes-heading">NOTES</h2>
                <div className="notes-content">
                    <div className="semester">
                        {/* Wrap BCA in an anchor tag with target="_blank" */}
                        <h3 className="semester-title">
                            <a href="https://drive.google.com/drive/folders/11_MQVa4sDXtorxl58i4txVxZK423L2Wb?usp=drive_link" target="_blank" rel="noopener noreferrer">BCA</a>
                        </h3>
                    </div>
                    <div className="semester">
                        <h3 className="semester-title">
                            <a href="https://drive.google.com/drive/folders/1Yz1uXo8aof1loqTzSY1WS1f9HZHVywIu?usp=drive_link" target="_blank" rel="noopener noreferrer">MCA</a>
                        </h3>
                    </div>
                    <div className="semester">
                        <h3 className="semester-title">
                            <a href="https://drive.google.com/drive/folders/1d8lhEMGSPWswG8q5G9a-bgJWWtRHvon2?usp=drive_link" target="_blank" rel="noopener noreferrer">Btech</a>
                        </h3>
                    </div>
                    <div className="semester">
                        <h3 className="semester-title">
                            <a href="https://drive.google.com/drive/folders/1RcVzOMloeXPZLDCsSx_VUNALKkUoTPmL?usp=drive_link" target="_blank" rel="noopener noreferrer">Mtech</a>
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Notes;
