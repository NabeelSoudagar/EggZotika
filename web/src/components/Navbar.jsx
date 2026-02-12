import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const navRef = useRef(null);

    useGSAP(() => {
        gsap.from('.nav-item', {
            opacity: 0,
            y: -20,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.5
        });

        gsap.from('.logo', {
            opacity: 0,
            x: -20,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.2
        });
    }, { scope: navRef });

    return (
        <nav className="navbar" ref={navRef}>
            <div className="navbar-container">
                <a href="#hero" className="logo">EggZotika</a>
                <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                    <a href="#hero" onClick={() => setIsOpen(false)} className="nav-item">Home</a>
                    <a href="#menu" onClick={() => setIsOpen(false)} className="nav-item">Menu</a>
                    <a href="#about" onClick={() => setIsOpen(false)} className="nav-item">About</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="nav-item">Contact</a>
                </div>
                <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
