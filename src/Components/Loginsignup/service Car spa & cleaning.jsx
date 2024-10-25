import React from 'react';
import './service Car spa & cleaning.css';

import Car_Spa from '../Assets/Car spa & cleaning.jpg';


const ServiceCarSpa= () => {
    return (
        <div className="service">
            <div className="header">
                <nav>
                    <h1>Our Services</h1>
                </nav>
            </div>

            <div className="container">
                <section className="service-section">
                    <h2>Car Spa & cleaning</h2>
                    <div className="details">
                        <img src={Car_Spa} alt="Car spa and cleaning" />
                        <div className="content">
                            <p>🛡️ 1 month warranty on Labour</p>
                            <p>🧑🏼‍🔧 Spare parts charge will be extra</p>
                            <h3>What's included?</h3>
                            <ul>
                                <li>Premium Top Wash</li>
                                <li>Car Wash 7 Wax</li>
                                <li>Car Interior Spa</li>
                                <li>Deep All Round Spa</li>
                                <li>Car Rubbing & Polishing</li>
                            </ul>
                            <p className="price">₹ 20000</p>
                            <button className="appointment-btn">Make Appointment</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ServiceCarSpa;
