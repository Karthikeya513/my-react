import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div id="contact" className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7gxZ7R69kv5clY7arFSgYrmmhJa2k8yyCdQ&s" alt="Vertexpace Logo" className="footer-logo" />
          <p className="footer-description">
            Vertexpace is a leading education consultancy helping students
            achieve their academic and career goals.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-link">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-link-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#what-we-do">What we do</a>
            </li>
            <li>
              <a href="#colleges">Colleges</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h4 className="footer-heading">Contact Us</h4>
          <p>
            <i className="fas fa-phone-alt"></i> +91 9620201058
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@vertexpace.com
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> No.362 / 7, 2nd Floor, 16th
            Main, 4th T Block, Jayanagar, Bangalore, Karnataka - 560041
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>Copyright © 2024 Vertexpace. All rights reserved.</p>
        <div className="footer-policy-links">
          <a href="#">Private Policy</a>
          <a href="#">Support</a>
          <a href="#">Terms & Condition</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
