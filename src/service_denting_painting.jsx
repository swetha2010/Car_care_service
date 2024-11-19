import React from 'react';
import './service_denting_painting.css';

import Denting_Painting from '../Assets/Denting painting.jpg';


const ServiceDentingPainting= () => {
    return (
        <div className="service-available3">
            <div className="part3">
                <nav>
                    <h1>Our Services</h1>
                </nav>
            </div>

            <div className="denting-painting">
                <section className="service-section3">
                    <h2>Denting & Painting</h2>
                    <div className="details3">
                        <img className="denting-image" src={Denting_Painting} alt="Denting Painting" />
                        <div className="content3">
                            <p>🛡️ 1 month warranty on Labour</p>
                            <p>🧑🏼‍🔧 Spare parts charge will be extra</p>
                            <h3>What's included?</h3>
                            <ul>
                                <li>Body Panel Replacement</li>
                                <li>Claim Intemation</li>
                                <li>Surveyor Estimate Approval</li>
                                <li>File Charge Included</li>
                            </ul>
                            <p className="price3">₹ 6500</p>
                            <button className="appointment-btn3">Make Appointment</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ServiceDentingPainting;
