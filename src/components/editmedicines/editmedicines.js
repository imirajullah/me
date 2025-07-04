// src/components/EditMedicine/EditMedicine.js
import React, { useState } from 'react';
import { TextField, Button, Menu, MenuItem } from '@mui/material';
import './editmedicines.css';

const EditMedicine = () => {
  const [formData, setFormData] = useState({
    dosage: '100mg',
    instructions: 'Avoid daily products'
  });

  const [anchorEl, setAnchorEl] = useState({
    demoAttempts: null,
    criterium: null,
    patientMenu: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleMenuOpen = (menu, event) => {
    setAnchorEl({ ...anchorEl, [menu]: event.currentTarget });
  };

  const handleMenuClose = (menu) => {
    setAnchorEl({ ...anchorEl, [menu]: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data:', formData);
  };

  return (
    <div className="edit-medicine-container">
      <h1>Edit Medicine</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <TextField
            label="Dosage"
            name="dosage"
            value={formData.dosage}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          
          <TextField
            label="Instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
            margin="normal"
          />
        </div>

        <div className="settings-section">
          <div className="menu-group">
            <Button 
              variant="contained" 
              onClick={(e) => handleMenuOpen('demoAttempts', e)}
            >
              Demo Attempts
            </Button>
            <Menu
              anchorEl={anchorEl.demoAttempts}
              open={Boolean(anchorEl.demoAttempts)}
              onClose={() => handleMenuClose('demoAttempts')}
            >
              <MenuItem>Option 1</MenuItem>
              <MenuItem>Option 2</MenuItem>
            </Menu>
          </div>

          <div className="menu-group">
            <Button 
              variant="contained" 
              onClick={(e) => handleMenuOpen('criterium', e)}
            >
              Criterium
            </Button>
            <Menu
              anchorEl={anchorEl.criterium}
              open={Boolean(anchorEl.criterium)}
              onClose={() => handleMenuClose('criterium')}
            >
              <MenuItem>Criteria 1</MenuItem>
              <MenuItem>Criteria 2</MenuItem>
            </Menu>
          </div>
        </div>

        <div className="patient-section">
          <h3>Zain Maitz</h3>
          <Button 
            variant="outlined" 
            onClick={(e) => handleMenuOpen('patientMenu', e)}
          >
            Menu
          </Button>
          <Menu
            anchorEl={anchorEl.patientMenu}
            open={Boolean(anchorEl.patientMenu)}
            onClose={() => handleMenuClose('patientMenu')}
          >
            <MenuItem>Edit Patient</MenuItem>
            <MenuItem>View History</MenuItem>
            <MenuItem>Delete</MenuItem>
          </Menu>
        </div>

        <Button 
          type="submit" 
          variant="contained" 
          color="primary"
          size="large"
          className="save-button"
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default EditMedicine;