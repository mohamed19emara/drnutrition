import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>
                  <Link to="/" className='logo-name'>
                  Dr Mohamed
                  </Link>  
                    </h1>
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/BMICalculator">BMIcalculator</Link>
                    </li>
                    <li>
                        <Link to="/AppointmentForm">Appointment</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                   
                </ul>
            </nav>
        </header>
    );
};

export default Header;
