import React from 'react';
import './service_AC service_Repair.css';

import Ac_service from '../Assets/AC service & Repair.jpg';


const ServiceAcRepair= () => {
    return (
        <div className="service">
            <div className="header">
                <nav>
                    <h1>Our Services</h1>
                </nav>
            </div>

            <div className="container">
                <section className="service-section">
                    <h2>AC Service & Repair</h2>
                    <div className="details">
                        <img src={Ac_service} alt="Ac Service & Repair" />
                        <div className="content">
                            <p>🛡️ 1 month warranty on Labour</p>
                            <p>🧑🏼‍🔧 Spare parts charge will be extra</p>
                            <h3>What's included?</h3>
                            <ul>
                                <li>Cooling Coil Replacement</li>
                                <li>Radiator Fresh & Clean</li>
                                <li>V-Belt Replacement</li>
                                <li>Condenser Replacement</li>
                                <li>AC Motor Blower Replacement</li>
                                <li>Radiator Fan Motor Replacement</li>
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

export default ServiceAcRepair;
