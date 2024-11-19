import React from 'react';
import './service_basic_service.css';

import Basic_service from '../Assets/Basic service.jpg';


const ServiceBasicService = () => {
    return (
        <div className="service-available2">
            <div className="part2">
                <nav>
                    <h1>Our Services</h1>
                </nav>
            </div>

            <div className="basic-service">
                <section className="service-section2">
                    <h2>Basic Services</h2>
                    <div className="details2">
                        <img className="basic-image" src={Basic_service} alt="Basic service" />
                        <div className="content2">
                            <p>🛡️ 1 month warranty on Labour</p>
                            <p>🧑🏼‍🔧 Spare parts charge will be extra</p>
                            <h3>What's included?</h3>
                            <ul>
                                <li>Wiper Fluid Replacement</li>
                                <li>Engine Oil Replacement</li>
                                <li>Air Filter Cleaning</li>
                                <li>Car Wash</li>
                                <li>Interior Vaccuming</li>
                            </ul>
                            <p className="price2">₹ 8500</p>
                            <button className="appointment-btn2">Make Appointment</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ServiceBasicService;
