import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Chef from './components/Chef';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Location from './components/Location';
import About from './components/About';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';
import './App.css';

function App() {
    return (
        <div className="App">
            <BackgroundAnimation />
            <Navbar />
            <Hero />
            <Menu />
            <Chef />
            <Gallery />
            <Testimonials />
            <Location />
            <About />
            <Footer />
        </div>
    );
}

export default App;
