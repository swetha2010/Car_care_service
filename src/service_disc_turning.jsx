import React from 'react';
import './service_disc_turning.css';

import Disc_turning from '../Assets/Disc turning.jpg';


const ServiceDiscTurning = () => {
    return (
        <div className="service-available1">
            <div className="part1">
                <nav>
                    <h1>Our Services</h1>
                </nav>
            </div>

            <div className="disc-turning">
                <section className="service-section1">
                    <h2>Disc Turning</h2>
                    <div className="details1">
                        <img className="disc-image" src={Disc_turning} alt="Disc Turning Service" />
                        <div className="content1">
                            <p>🛡️ 1 month warranty on Labour</p>
                            <p>🧑🏼‍🔧 Spare parts charge will be extra</p>
                            <h3>What's included?</h3>
                            <ul>
                                <li>Inspection of Brake Discs</li>
                                <li>Opening & Fitting of Brake Discs</li>
                                <li>Resurfacing of Brake Disc</li>
                                <li>Applicable for set of 2 Discs (Wheels)</li>
                            </ul>
                            <p className="price1">₹ 3669</p>
                            <button className="appointment-btn1">Make Appointment</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ServiceDiscTurning;
