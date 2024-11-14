// src/components/OurServices.js
import React from 'react';
import { Link } from 'react-router-dom';
import './services.css'

const servicesData = [
  {
    id: 1,
    title: 'Nutritional Consultation',
    description: 'Personalized consultations to assess your dietary needs and health goals.',
    price: 'Starting at $50',
  },
  {
    id: 2,
    title: 'Meal Planning',
    description: 'Customized meal plans that fit your lifestyle and dietary preferences.',
    price: 'Starting at $30',
  },
  {
    id: 3,
    title: 'Weight Management Programs',
    description: 'Programs designed to help you achieve and maintain a healthy weight.',
    price: 'Contact for pricing',
  },
  {
    id: 4,
    title: 'Fitness and Nutrition Workshops',
    description: 'Workshops focusing on the relationship between diet and fitness.',
    price: 'Contact for pricing',
  },
];

const OurServices = () => {
  return (
    <div className="our-services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-cards">
        {servicesData.map((service) => (
          <Link to={`/AppointmentForm`} key={service.id} className="service-card-link">
            <div className="service-card">
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
              <p className="card-price"><strong>{service.price}</strong></p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
