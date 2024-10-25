import React from 'react';
import './service_Tyres_wheel.css';

import Tyrewheel from '../Assets/Tyres & Wheel care.jpg';


const ServiceTyreWheel= () => {
    return (
        <div className="service">
            <div className="header">
                <nav>
                    <h1>Our Services</h1>
                </nav>
            </div>

            <div className="container">
                <section className="service-section">
                    <h2>Tyres & Wheel care</h2>
                    <div className="details">
                        <img src={Tyrewheel} alt="Tyres wheel care" />
                        <div className="content">
                            <p>🛡️ 1 month warranty on Labour</p>
                            <p>🧑🏼‍🔧 Spare parts charge will be extra</p>
                            <h3>What's included?</h3>
                            <ul>
                                <li>Complete Wheel Care</li>
                                <li>Tyre Replacement</li>
                                <li>Mud Flaps</li>
                            </ul>
                            <p className="price">₹6000</p>
                            <button className="appointment-btn">Make Appointment</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ServiceTyreWheel;
