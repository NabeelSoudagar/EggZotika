import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import './Menu.css';
import MomosImg from '../assets/momos.jfif';
import FrenchFriesImg from '../assets/french.jfif';
import { staggerChildren } from '../utils/animations';

const menuItems = [
    {
        name: 'Chicken Roll',
        description: 'Spicy and juicy chicken wrapped in a soft paratha.',
        price: '₹120',
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=600&auto=format&fit=crop'
    },
    {
        name: 'Burger',
        description: 'Juicy patty with fresh veggies and special sauce.',
        price: '₹150',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop'
    },
    {
        name: 'Sandwich',
        description: 'Grilled sandwich with cheese and fresh vegetables.',
        price: '₹100',
        image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop'
    },
    {
        name: 'French Fries',
        description: 'Crispy, golden, and perfectly salted.',
        price: '₹90',
        image: FrenchFriesImg
    },
    {
        name: 'Momos',
        description: 'Steamed dumplings served with spicy chutney.',
        price: '₹80',
        image: MomosImg
    },
    {
        name: 'Maggi',
        description: 'Classic masala maggi with extra veggies.',
        price: '₹70',
        image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=600&auto=format&fit=crop'
    },
    {
        name: 'Coffee',
        description: 'Hot brewed coffee to kickstart your day.',
        price: '₹50',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop'
    },
    {
        name: 'Omelette',
        description: 'Fluffy eggs cooked with onions, tomatoes, and chilies.',
        price: '₹60',
        image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?q=80&w=600&auto=format&fit=crop'
    }
];

const Menu = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const items = containerRef.current.querySelectorAll('.menu-item');
        staggerChildren(items);
    }, { scope: containerRef });

    return (
        <section id="menu" className="menu-section" ref={containerRef}>
            <h2>Our Menu</h2>
            <div className="menu-grid">
                {menuItems.map((item, index) => (
                    <div key={index} className="menu-item">
                        <div className="menu-obj-img">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="menu-content">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <span className="price">{item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Menu;
