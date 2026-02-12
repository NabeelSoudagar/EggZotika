import React from 'react';
import './Menu.css';
import MomosImg from '../assets/momos.jfif';
import FrenchFriesImg from '../assets/french.jfif';

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
        description: 'Classic comfort food, cooked to perfection.',
        price: '₹50',
        image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=600&auto=format&fit=crop'
    },
    {
        name: 'Pizza',
        description: 'Cheesy, delicious, and loaded with toppings.',
        price: '₹250',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop'
    },
    {
        name: 'Pasta',
        description: 'Creamy or tangy, the choice is yours.',
        price: '₹180',
        image: 'https://images.unsplash.com/photo-1626844131082-256783844137?q=80&w=600&auto=format&fit=crop'
    },
    {
        name: 'Coffee',
        description: 'Freshly brewed to kickstart your day.',
        price: '₹80',
        image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600&auto=format&fit=crop'
    },
];

const Menu = () => {
    return (
        <section id="menu" className="menu-section">
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
