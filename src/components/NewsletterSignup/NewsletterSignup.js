// src/components/NewsletterSignup.js
import React, { useState } from 'react';
import './NewsletterSignup.css';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
  };

  return (
    <form className="newsletter-signup" onSubmit={handleSubmit}>
      <h2>Subscribe to Our Newsletter</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default NewsletterSignup;
