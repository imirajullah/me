import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// CSS imports
import './components/login/login.css';
import './components/medicines/medicines.css';
import './components/medicinesdetail/medicinesdetail.css';
import './components/editmedicines/editmedicines.css';
import './components/scheduleappointment/scheduleappointment.css';
import './components/schedulemedicines/schedulemedicines.css';

// Component imports
import Login from './components/login/login';
import Medicines from './components/medicines/medicines';
import MedicinesDetail from './components/medicinesdetail/medicinesdetail';
import EditMedicine from './components/editmedicines/editmedicines';
import ScheduleAppointment from './components/scheduleappointment/ScheduleAppointment';
import ScheduleMedicines from './components/schedulemedicines/schedulemedicines';

// Centralized Routes for easy maintenance
export const ROUTES = {
  LOGIN: '/',
  MEDICINES: '/medicines',
  MEDICINES_DETAIL: '/medicinesdetail',
  EDIT_MEDICINES: '/editmedicines',
  SCHEDULE_APPOINTMENT: '/scheduleappointment',
  SCHEDULE_MEDICINES: '/schedulemedicines',
};

const Navbar = () => {
  return (
    <nav>
      <ul>
        
        <li><Link to={ROUTES.LOGIN} >Login</Link></li>
        <li><Link to={ROUTES.MEDICINES}>Medicines</Link></li>
        <li><Link to={ROUTES.MEDICINES_DETAIL}>Medicines Detail</Link></li>
        <li><Link to={ROUTES.EDIT_MEDICINES}>Edit Medicines</Link></li>
        <li><Link to={ROUTES.SCHEDULE_APPOINTMENT}>Schedule Appointment</Link></li>
        <li><Link to={ROUTES.SCHEDULE_MEDICINES}>Schedule Medicines</Link></li>
      </ul>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.MEDICINES} element={<Medicines />} />
        <Route path={ROUTES.MEDICINES_DETAIL} element={<MedicinesDetail />} />
        <Route path={ROUTES.EDIT_MEDICINES} element={<EditMedicine />} />
        <Route path={ROUTES.SCHEDULE_APPOINTMENT} element={<ScheduleAppointment />} />
        <Route path={ROUTES.SCHEDULE_MEDICINES} element={<ScheduleMedicines />} />
      </Routes>
    </Router>
  );
}

export default App;
