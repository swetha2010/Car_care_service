import './App.css';
import React from 'react';
import Loginsignup from './Components/Loginsignup/loginsignup.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Loginsignup/Homepage.jsx';
import Servicecenter from './Components/Loginsignup/servicecenter.jsx';
import Service from './Components/Loginsignup/service.jsx';
import ServiceDiscTurning from './Components/Loginsignup/service_disc_turning.jsx';
import ServiceBasicService from './Components/Loginsignup/service_basic_service.jsx';
import ServiceDentingPainting from './Components/Loginsignup/service_denting_painting.jsx';
import ServiceAcRepair from './Components/Loginsignup/service_AC service_Repair.jsx';
import ServiceCarSpa from './Components/Loginsignup/service Car spa & cleaning.jsx';
import ServiceTyreWheel from './Components/Loginsignup/service_Tyres_wheelcare.jsx';
 
function App() {
  return (
   
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={ <Loginsignup/>} />
        <Route path='/servicecenter' element={ <Servicecenter/>} />
        <Route path='/service' element={ <Service/>} />
        <Route path='/disc_turning' element={ <ServiceDiscTurning/>} />
        <Route path='/basic_service' element={<ServiceBasicService/>} />
        <Route path='/denting_painting' element={<ServiceDentingPainting/>} />
        <Route path='/Ac service_Repair' element={< ServiceAcRepair/>} />
        <Route path='/Car spa' element={< ServiceCarSpa/>} />
        <Route path='/Tyreswheel' element={< ServiceTyreWheel/>} />

      </Routes>
      </BrowserRouter>
     
      
   
  
  );
}
 
export default App;
 