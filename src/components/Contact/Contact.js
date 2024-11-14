// src/components/ContactForm.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us!');
  };

  return (
    <form className="contact-form m-5" onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
      <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;
