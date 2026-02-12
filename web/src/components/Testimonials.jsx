import React from 'react';
import './Testimonials.css';

const reviews = [
    {
        name: "Rahul Deshpande",
        text: "The Chicken Roll is absolutely amazing! The spice level is perfect and the paratha is so soft. Highly recommended!",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        name: "Priya Patil",
        text: "Best place for late night cravings. The Maggi and Coffee combo is a lifesaver. Great ambiance too!",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        name: "Amit Joshi",
        text: "I love the new Burger. It's juicy and packed with flavor. The Chef really knows his stuff!",
        rating: "⭐⭐⭐⭐"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials-section">
            <h2>What Our Customers Say</h2>
            <div className="testimonials-grid">
                {reviews.map((review, index) => (
                    <div key={index} className="testimonial-card">
                        <p className="rating">{review.rating}</p>
                        <p className="review-text">"{review.text}"</p>
                        <h4 className="customer-name">- {review.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
