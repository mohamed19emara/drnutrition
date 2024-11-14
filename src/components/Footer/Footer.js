// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer"  >
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-section about">
          <h2 className="footer-logo">YourWebsite</h2>
          <p>
            YourWebsite is dedicated to providing quality content and valuable services to
            enhance your online presence. Follow us on social media to stay connected.
          </p>
        </div>

        {/* Useful Links */}
        <div className="footer-section links">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: info@yourwebsite.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Main St, City, Country</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com">facebook<i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com">twitter<i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com">instagram<i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com">linkedin<i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <p className="footer-bottom">&copy; {new Date().getFullYear()} YourWebsite. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
