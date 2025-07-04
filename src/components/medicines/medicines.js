// src/component/MedicinesPage/MedicinePage.js
import React, { useState, useEffect } from 'react';
import './medicines.css';


const MedicinePage = () => {
  const [medicines, setMedicines] = useState([]);
  const [newMedicine, setNewMedicine] = useState({
    name: '',
    dosage: '',
    time: ''
  });

  // Load medicines from localStorage
  useEffect(() => {
    const storedMedicines = localStorage.getItem('medicines');
    if (storedMedicines) {
      setMedicines(JSON.parse(storedMedicines));
    }
  }, []);

  // Save to localStorage whenever medicines change
  useEffect(() => {
    localStorage.setItem('medicines', JSON.stringify(medicines));
  }, [medicines]);

  const handleAddMedicine = (e) => {
    e.preventDefault();
    if (!newMedicine.name || !newMedicine.dosage || !newMedicine.time) return;
    
    setMedicines([...medicines, { 
      ...newMedicine, 
      id: Date.now() 
    }]);
    setNewMedicine({ name: '', dosage: '', time: '' });
  };

  const handleDelete = (id) => {
    setMedicines(medicines.filter(med => med.id !== id));
  };

  return (
    <div className="medicine-page">
      <h1>Medicine Management</h1>
      
      <form onSubmit={handleAddMedicine} className="add-form">
        <input
          type="text"
          placeholder="Medicine name"
          value={newMedicine.name}
          onChange={(e) => setNewMedicine({...newMedicine, name: e.target.value})}
        />
        <input
          type="text"
          placeholder="Dosage"
          value={newMedicine.dosage}
          onChange={(e) => setNewMedicine({...newMedicine, dosage: e.target.value})}
        />
        <input
          type="time"
          value={newMedicine.time}
          onChange={(e) => setNewMedicine({...newMedicine, time: e.target.value})}
        />
        <button type="submit">Add Medicine</button>
      </form>

      <div className="medicine-list">
        {medicines.map(medicine => (
          <div key={medicine.id} className="medicine-item">
            <h3>{medicine.name}</h3>
            <p>Dosage: {medicine.dosage}</p>
            <p>Time: {medicine.time}</p>
            <button onClick={() => handleDelete(medicine.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicinePage;