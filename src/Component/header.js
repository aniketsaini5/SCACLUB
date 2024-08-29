// src/Header.js
import React, { useState } from 'react';
import './Header.css'; // Import the CSS file
import Logo from './clube_logo.png';

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false); // State to manage navbar visibility

    // Function to toggle navbar visibility
    const handleToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="header">
            <nav className='navbar'>
                <button className="toggle-btn" onClick={handleToggle}>
                    &#9776; {/* Hamburger icon */}
                </button>
                <ul className={`nav-items ${isNavOpen ? 'active' : ''}`}>
                    <li className='nav-link'><a href="#home">Home</a></li>
                    <li className='nav-link'><a href="#updates">Updates</a></li>
                    <li className='nav-link'><a href="#notes">Notes</a></li>
                    <li className='nav-link'><a href="#about">About</a></li>
                    <li className='nav-link'><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className='logo'>
                <a href='#'>
                <img src = {Logo} alt="CODING CLUB" />
                </a>
            </div>
        </header>
    );
}

export default Header;
