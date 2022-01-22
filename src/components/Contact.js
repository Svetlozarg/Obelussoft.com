import React from "react";
import { Link } from "react-router-dom";

import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-wrapper">
        <h3>Contact us</h3>
        <p>Ready to turn the idea into reality?</p>
        <p>
          We create all sorts of web designs: portfolio, business, e-commerce,
          landing pages, sophisticated systems, and more!
        </p>
        <p>Get in touch with us now!</p>
        <Link to="/contact">
          <button>Contact us</button>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
