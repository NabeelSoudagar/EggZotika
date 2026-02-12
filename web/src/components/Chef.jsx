import React from 'react';
import './Chef.css';
import ChefImg from '../assets/chef.jpeg';

const Chef = () => {
    return (
        <section id="chef" className="chef-section">
            <div className="chef-container">
                <div className="chef-image">
                    <img src={ChefImg} alt="Pro Chef" />
                </div>
                <div className="chef-info">
                    <h2>Meet Our Chef</h2>
                    <h3>The Pro Chef in Belgaum</h3>
                    <p>
                        With years of culinary experience and a passion for creating egg-citing flavors,
                        our chef brings the best of taste to your table. Every dish is crafted with precision
                        and love to ensure you have a memorable dining experience.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Chef;
