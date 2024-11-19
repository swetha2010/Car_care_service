import React from 'react';
import './service.css';

import Disc_turning from '../Assets/Disc turning.jpg';
import Basic_service from '../Assets/Basic service.jpg';
import Denting_Painting from '../Assets/Denting painting.jpg';
import AC_service_Repair from '../Assets/AC service & Repair.jpg';
import Car_spa_Cleaning from '../Assets/Car spa & cleaning.jpg';
import Tyres_Wheel_Care from '../Assets/Tyres & Wheel care.jpg';

const Service = () => {
    return (
        <div className="service">
            <div className="top-service">
                <nav>
                    <h1 >Our Services</h1>
                </nav>
            </div>
            <div className="provided-services">
                <div className="cube">
                    <img className='image'src={Disc_turning} alt="Disc Turning" />
                    <h3>Disc Turning</h3>
                </div>
                <div className="cube">
                    <img className='image' src={Basic_service} alt="Basic Service" />
                    <h3>Basic Service</h3>
                </div>
                <div className="cube">
                    <img className='image' src={Denting_Painting} alt="Denting & Painting" />
                    <h3>Denting & Painting</h3>
                </div>
                <div className="cube">
                    <img className='image' src={AC_service_Repair} alt="AC Service & Repair" />
                    <h3>AC Service & Repair</h3>
                </div>
                <div className="cube">
                    <img className='image' src={Car_spa_Cleaning} alt="Car Spa & Cleaning" />
                    <h3>Car Spa & Cleaning</h3>
                </div>
                <div className="cube">
                    <img className='image' src={Tyres_Wheel_Care} alt="Tyres & Wheel Care" />
                    <h3>Tyres & Wheel Care</h3>
                </div>
            </div>
        </div>
    );
}

export default Service;
