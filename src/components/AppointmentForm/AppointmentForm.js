// src/components/Appointment.js
import React, { useState } from 'react';
import './AppointmentForm.css'

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    service: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="appointment-container m-5">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Your Name:</label>
          <input type="text" name="name" onChange={handleChange} required />
        </div>
        <div>
          <label>Your Email:</label>
          <input type="email" name="email" onChange={handleChange} required />
        </div>
        <div>
          <label>Select a Date:</label>
          <input type="date" name="date" onChange={handleChange} required />
        </div>
        <div>
          <label>Select Service:</label>
          <select name="service" onChange={handleChange} required>
            <option value="">Select a service</option>
            <option value="Consultation">Nutritional Consultation</option>
            <option value="Meal Planning">Meal Planning</option>
            <option value="Weight Management">Weight Management</option>
            <option value="Fitness Workshops">Fitness and Nutrition Workshops</option>
          </select>
        </div>
        <div>
          <label>Additional Notes:</label>
          <textarea name="notes" onChange={handleChange}></textarea>
        </div>
        <button type="submit">Submit Appointment</button>
      </form>
    </div>
  );
};

export default Appointment;
