import React from 'react';
import './service_denting_painting.css';

import Denting_Painting from '../Assets/Denting painting.jpg';


const ServiceDentingPainting= () => {
    return (
        <div className="service">
            <div className="header">
                <nav>
                    <h1>Our Services</h1>
                </nav>
            </div>

            <div className="container">
                <section className="service-section">
                    <h2>Denting & Painting</h2>
                    <div className="details">
                        <img src={Denting_Painting} alt="Denting Painting" />
                        <div className="content">
                            <p>🛡️ 1 month warranty on Labour</p>
                            <p>🧑🏼‍🔧 Spare parts charge will be extra</p>
                            <h3>What's included?</h3>
                            <ul>
                                <li>Body Panel Replacement</li>
                                <li>Claim Intemation</li>
                                <li>Surveyor Estimate Approval</li>
                                <li>File Charge Included</li>
                            </ul>
                            <p className="price">₹ 6500</p>
                            <button className="appointment-btn">Make Appointment</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ServiceDentingPainting;
