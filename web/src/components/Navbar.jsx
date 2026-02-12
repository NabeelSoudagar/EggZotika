import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-brand">EggZotika</div>
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <a href="#hero" onClick={() => setIsOpen(false)}>Home</a>
                <a href="#menu" onClick={() => setIsOpen(false)}>Menu</a>
                <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
            <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navbar;
