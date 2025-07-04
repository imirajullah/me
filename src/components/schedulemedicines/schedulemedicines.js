// src/components/ScheduleAppointment/ScheduleAppointmentForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './schedulemedicines.css';

const ScheduleMedicines = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    patientName: '',
    date: '',
    time: '',
    reason: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSchedule = (e) => {
    e.preventDefault();
    // Handle scheduling logic here
    console.log('Scheduled:', formData);
    navigate('/appointments');
  };

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className="schedule-container">
      <div className="schedule-header">
        <h1>Schedule Appointment</h1>
      </div>

      <form onSubmit={handleSchedule} className="schedule-form">
        <div className="form-group">
          <label>Patient Name</label>
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Reason</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="button-group">
          <button type="submit" className="schedule-btn">
            Schedule
          </button>
          <button type="button" className="close-btn" onClick={handleClose}>
            Close
          </button>
        </div>
      </form>

      <div className="patient-actions">
        <h3>Emily Deule</h3>
        <div className="action-buttons">
          <button className="action-btn end">End</button>
          <button className="action-btn tut">Tut</button>
          <button className="action-btn fix">Fix</button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleMedicines;