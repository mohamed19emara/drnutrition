import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Services from './components/services/Services';
import BMICalculator from './components/BMICalculator/BMICalculator';
import './index.css';
import AppointmentForm from './components/AppointmentForm/AppointmentForm';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/BMICalculator" element={<BMICalculator />} />
                <Route path="/AppointmentForm" element={<AppointmentForm />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/About" element={<About />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
