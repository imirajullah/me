// src/components/ScheduleAppointment/ScheduleAppointment.js
import React from 'react';
import './scheduleappointment.css';

const ScheduleAppointment = () => {
  const appointments = [
    {
      patient: "John Doe",
      date: "2025-04-22",
      time: "10:00 AM",
      reason: "Follow-up for high blood pressure",
      status: "Scheduled"
    },
    {
      patient: "Jane Smith",
      date: "2025-04-23",
      time: "2:30 PM",
      reason: "Routine check-up",
      status: "Completed"
    },
    {
      patient: "Michael Johnson",
      date: "2025-04-24",
      time: "11:15 AM",
      reason: "Complaint of chest pain",
      status: "Cancelled"
    },
    {
      patient: "Emily Davis",
      date: "2025-04-25",
      time: "12:45 AM",
      reason: "Complaint of chest pain",
      status: "Pending"
    }
  ];

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'scheduled': return 'blue';
      case 'completed': return 'green';
      case 'cancelled': return 'red';
      default: return 'gray';
    }
  };

  return (
    <div className="appointments-container">
      <div className="appointments-header">
        <h1>Appointments</h1>
        <div className="stats">
          <div className="stat-item">
            <h3>Total: 4</h3>
            <h3>Upcoming: 2</h3>
          </div>
        </div>
      </div>

      <div className="schedule-section">
        <h2>Schedule Appointment</h2>
        <button className="new-appointment-btn">
          + Schedule New Appointment
        </button>
      </div>

      <div className="appointments-list">
        {appointments.map((appointment, index) => (
          <div key={index} className="appointment-card">
            <div className="patient-info">
              <h3>{appointment.patient}</h3>
              <p>Date: {appointment.date}</p>
              <p>Time: {appointment.time}</p>
              <p>Reason: {appointment.reason}</p>
            </div>
            <div className="status" style={{ backgroundColor: getStatusColor(appointment.status) }}>
              {appointment.status}
            </div>
          </div>
        ))}
      </div>

      <div className="navigation-links">
        <button className="nav-btn">Medicines</button>
        <button className="nav-btn">Appointments</button>
        <button className="nav-btn">A Direction</button>
        <button className="nav-btn">Jed</button>
        <button className="nav-btn">Royal</button>
      </div>
    </div>
  );
};

export default ScheduleAppointment;