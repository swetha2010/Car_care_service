import React from 'react';
import './service_Tyres_wheel.css';

import Tyrewheel from '../Assets/Tyres & Wheel care.jpg';


const ServiceTyreWheel= () => {
    return (
        <div className="service-available6">
            <div className="part6">
                <nav>
                    <h1>Our Services</h1>
                </nav>
            </div>

            <div className="tyres-wheelcare">
                <section className="service-section6">
                    <h2>Tyres & Wheel care</h2>
                    <div className="details6">
                        <img className="tyres-image" src={Tyrewheel} alt="Tyres wheel care" />
                        <div className="content6">
                            <p>🛡️ 1 month warranty on Labour</p>
                            <p>🧑🏼‍🔧 Spare parts charge will be extra</p>
                            <h3>What's included?</h3>
                            <ul>
                                <li>Complete Wheel Care</li>
                                <li>Tyre Replacement</li>
                                <li>Mud Flaps</li>
                            </ul>
                            <p className="price6">₹6000</p>
                            <button className="appointment-btn6">Make Appointment</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ServiceTyreWheel;
