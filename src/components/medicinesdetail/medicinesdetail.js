// src/components/MedicineDetails/MedicineDetails.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './medicinesdetail.css';

const MedicineDetails = () => {
  const navigate = useNavigate();
  const [doses, setDoses] = useState({});

  // Sample patient data
  const patients = [
    {
      name: "Sara Ahmed",
      medicine: "Cetirizine",
      dosesPerDay: 3,
      days: 3
    },
    {
      name: "Zain Malik",
      medicine: "Me",
      dosesPerDay: 4,
      days: 2
    }
  ];

  const toggleDose = (patientName, day, doseIndex) => {
    setDoses(prev => ({
      ...prev,
      [`${patientName}-${day}-${doseIndex}`]: 
        !prev[`${patientName}-${day}-${doseIndex}`]
    }));
  };

  return (
    <div className="medicine-details-container">
      <div className="medicine-card">
        <button className="close-button" onClick={() => navigate(-1)}>
          Close
        </button>

        <div className="patient-info">
          <h2>Patient: Usman Tariq</h2>
          <div className="details-grid">
            <div>
              <label>Medicine:</label>
              <span>Ibuprofen</span>
            </div>
            <div>
              <label>Dosage:</label>
              <span>100mg</span>
            </div>
            <div>
              <label>Instructions:</label>
              <span>Avoid dairy products</span>
            </div>
            <div>
              <label>Prescribed By:</label>
              <span>Dr. Usman</span>
            </div>
            <div>
              <label>Available:</label>
              <span className="available">Yes</span>
            </div>
          </div>
        </div>

        <div className="dose-schedule">
          {patients.map((patient, index) => (
            <div key={index} className="patient-schedule">
              <h3>{patient.name}</h3>
              <p className="medicine-name">{patient.medicine}</p>
              
              {Array.from({ length: patient.days }).map((_, day) => (
                <div key={day} className="day-row">
                  {Array.from({ length: patient.dosesPerDay }).map((_, doseIndex) => (
                    <button
                      key={doseIndex}
                      className={`dose-box ${doses[`${patient.name}-${day}-${doseIndex}`] ? 'taken' : ''}`}
                      onClick={() => toggleDose(patient.name, day, doseIndex)}
                    >
                      {doses[`${patient.name}-${day}-${doseIndex}`] ? '💤' : '⬜️'}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicineDetails;