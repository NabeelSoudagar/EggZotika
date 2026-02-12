import React from 'react';
import './Gallery.css';

const photos = [
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop', // Food 1
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=600&auto=format&fit=crop', // Food 2
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop', // Food 3
    'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=600&auto=format&fit=crop', // Food 4
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop', // Food 5
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=600&auto=format&fit=crop'  // Food 6
];

const Gallery = () => {
    return (
        <section id="gallery" className="gallery-section">
            <h2>Gallery</h2>
            <div className="gallery-grid">
                {photos.map((src, index) => (
                    <div key={index} className="gallery-item">
                        <img src={src} alt={`Gallery ${index + 1}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
