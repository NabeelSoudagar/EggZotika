import React from 'react';
import './Location.css';

const Location = () => {
    return (
        <section id="location" className="location-section">
            <h2>Find Us</h2>
            <div className="location-container">
                <div className="map-responsive">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.283187216484!2d74.5246733!3d15.8661665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf613ac353930b%3A0xc3911584c3c2e171!2sUK%2027%20The%20Fern%20-%20An%20Ecotel%20Hotel%2C%20Belagavi!5e0!3m2!1sen!2sin!4v1707760000000!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="EggZotika Location"
                    ></iframe>
                </div>
                <div className="location-details">
                    <h3>EggZotika</h3>
                    <p>Beside U K 27 Hotel,</p>
                    <p>Ayodhya Nagar/Jadhav Nagar,</p>
                    <p>Belgaum, Karnataka 590001</p>
                    <button className="direction-btn" onClick={() => window.open('https://maps.google.com/?q=UK+27+The+Fern+Belagavi', '_blank')}>
                        Get Directions
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Location;
