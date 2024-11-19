import React, { useState } from 'react';
import './Home.css';
 
const HomePage = () => {
    const [showLoginSignup, setShowLoginSignup] = useState(false);
 
    const handleOpenModal = () => {
        setShowLoginSignup(true);
    };
 
    const handleCloseModal = () => {
        setShowLoginSignup(false);
    };
 
    return (
        <div className="home-container">
            {/* Header Section */}
            <div className="header1">
                <div className="logo">Auto <span>Ally</span></div>
                <nav className="top">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#service">Service center</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="contact-info">
                    <p>⏱️Mon-Sat 8am-9pm &nbsp; 📞+916745893939 &nbsp; 📩autoallyweb@gmail.com</p>
                    
                </div>
                <button className="login-btn" onClick={handleOpenModal}>Login/Signup</button>
            </div>
 
            {/* Hero Section */}
            <section className="hero">
                <div className="overlay">
                    <h1>WASHING & DETAILING</h1>
                    <h2>Where passion meets precision in every repair</h2>
                    <p>
                        Join a community of satisfied drivers who trust us with their cars.
                        Our friendly team is here to ensure your vehicle runs smoothly and efficiently.
                    </p>
                    <a href="#services" className="cta-btn">Explore more</a>
                </div>
            </section>
 
            {/* Modal for Login/Signup */}
            {showLoginSignup && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>×</span>
                        {/* <Loginsignup /> Login/signup form component */}
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default HomePage;