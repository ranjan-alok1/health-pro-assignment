import React, { useState } from 'react';
import './Navbar.css';
import logo from "../assets/logo.png"

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <img src={logo} style={{width:"200px"}} alt="logo" />
                </div>

                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#donor">Donor Programme</a>
                    <a href="#fertility">Fertility Preservation</a>
                    <a href="#treatments">Advanced Treatments</a>
                    <a href="#infertility">Infertility Treatments</a>
                    <a href="#testing">IVF Testing</a>
                    <a href="#about">About Us</a>
                    <button className="talk-button">
                        Talk to Us <span className="arrow">→</span>
                    </button>
                </div>

                <button className="mobile-menu" onClick={toggleMenu}>
                    <div className="menu-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;

