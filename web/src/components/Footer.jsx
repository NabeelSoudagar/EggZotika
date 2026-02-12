import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-content">
                <h3>EggZotika</h3>
                <p>Visit us for the best egg-citing meals!</p>
                <div className="contact-info">
                    <p>Phone: +91 88614 91102</p>
                    <p>Email: hello@eggzotika.com</p>
                    <p>Address: Beside U K 27 Hotel, located in Ayodhya Nagar/Jadhav Nagar (near UK 27)</p>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} EggZotika. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
