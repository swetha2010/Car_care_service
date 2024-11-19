import React from 'react';
import './servicecenter.css';

const ServiceCenter = () => {
    return (
        <div className="Workshop">
            <div className="head-center">
                <nav>
                    <h1 className="Service-Center">Service Centers</h1>
                </nav>
            </div>
            <div className="centers">
                <div className="box">
                    <h2 className="head">Wrench King</h2>
                    <p className="address">📍 35, 10th Ave, Sarvamangala Colony, Ashok Nagar, Chennai</p>
                    <p className="ph_no">☎️ 415-969-4630</p>
                    <p className="email">📩 wrench@gmail.com</p>
                    <button className="go">Go</button>
                </div>
                <div className="box">
                    <h2 className="head">Car Medic</h2>
                    <p className="address">📍 7th & 8th Floor NPL Devi, Near Thyagaraja Theatre, Adyar, Chennai</p>
                    <p className="ph_no">☎️ 1-844-808-8666</p>
                    <p className="email">📩 carmedic@gmail.com</p>
                    <button className="go">Go</button>
                </div>
                <div className="box">
                    <h2 className="head">Extra Mile</h2>
                    <p className="address">📍 New No. 109/2187 Periyar Pathai West, Arumbakam, Chennai</p>
                    <p className="ph_no">☎️ 1-217-284-9487</p>
                    <p className="email">📩 extremile@gmail.com</p>
                    <button className="go">Go</button>
                </div>
                <div className="box">
                    <h2 className="head">Marvel Autos</h2>
                    <p className="address">📍 New No 58A, 1st Floor, Habibullah Rd, opp. SGS Saba, T. Nagar, Chennai</p>
                    <p className="ph_no">☎️ 0749-543-5448</p>
                    <p className="email">📩 marvelats@gmail.com</p>
                    <button className="go">Go</button>
                </div>
                <div className="box">
                    <h2 className="head">Wheels Doc</h2>
                    <p className="address">📍 73/1 Sterling Road, 1st and 2nd floor Nungambakkam, Chennai</p>
                    <p className="ph_no">☎️ 306-930-9352</p>
                    <p className="email">📩 wheeldoc@gmail.com</p>
                    <button className="go">Go</button>
                </div>
                <div className="box">
                    <h2 className="head">Car Fixers</h2>
                    <p className="address">📍 209, Kutchery Rd, Vinayaka Nagar Colony, Mylapore, Chennai</p>
                    <p className="ph_no">☎️ 1-844-588-8646</p>
                    <p className="email">📩 cerfixee@gmail.com</p>
                    <button className="go">Go</button>
                </div>
            </div>
        </div>
    );
}

export default ServiceCenter;
