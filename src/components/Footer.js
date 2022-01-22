import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-up">
        <div className="footer-div">
          <img src={logo} alt="ObelusSoft Logo" />
          <p>
            In ObelusSoft we have the right tools to turn your idea into an
            outstanding online success! We specialise in building stunning
            websites and SEO optimisation. We are a team of professionals who
            strive to create quality web services that are modern and ideal.
            Customer satisfaction is our ultimate fuel which motivates us to
            always do an exquisite job.
          </p>
        </div>
        <div className="footer-div">
          <h4>Menu</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-div">
          <h4>Social Networks</h4>
          <a
            href="https://www.facebook.com/ObelusSoft"
            target="_blank"
            rel="noopener"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
      <div className="footer-down">
        <p>ObelusSoft © 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
