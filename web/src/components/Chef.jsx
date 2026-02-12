import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import './Chef.css';
import ChefImg from '../assets/chef.jpeg';
import { slideInLeft, slideInRight } from '../utils/animations';

const Chef = () => {
    const sectionRef = useRef(null);
    const imgRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        slideInLeft(imgRef.current);
        slideInRight(textRef.current);
    }, { scope: sectionRef });

    return (
        <section id="chef" className="chef-section" ref={sectionRef}>
            <div className="chef-container">
                <div className="chef-image" ref={imgRef}>
                    <img src={ChefImg} alt="Pro Chef" />
                </div>
                <div className="chef-info" ref={textRef}>
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
