// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <h1>Welcome to Your Path to Wellness</h1>
      <p>Transform your life with personalized nutrition plans and expert guidance.</p>
      <button className="cta-button">
      <Link to='/about'>
      Get Started
      </Link>  
        </button>
    </div>
  );
};

export default HeroSection;
