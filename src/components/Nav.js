import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

import logo from "../images/logo.png";

const Nav = ({ toggle }) => {
  const [header, setHeader] = useState("header2");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 150) {
      return setHeader("header2");
    } else if (window.scrollY > 150) {
      return setHeader("header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header className={header}>
      <Link to="/">
        <img src={logo} alt="ObelusSoft Logo" />
      </Link>

      <nav>
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
      </nav>
      <i className="fas fa-bars nav-bars" onClick={toggle}></i>

      <div className="header-social">
        <a
          href="https://www.facebook.com/ObelusSoft"
          target="_blank"
          rel="noopener"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a href="mailto: support@obelussoft.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </header>
  );
};

export default Nav;
