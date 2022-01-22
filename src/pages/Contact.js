import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="contact-page">
      <Helmet>
        <title>ObelusSoft | Contact</title>
      </Helmet>
      <div className="contact-page-main">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-page-wrapper">
        <h2>How to contact us</h2>
        <p>
          Do you have an idea for an online business? Or do you have questions?
          We will be happy to help you in the best way.
        </p>

        <p>We offer english and bulgarian support!</p>

        <p>
          <i className="fas fa-envelope"></i> support@obelussoft.com
        </p>

        <h2>Contact us directly</h2>
        <p>
          Fill out the form below and we will contact you in the next 24 hours.
        </p>
        <form
          target="_blank"
          action="https://formsubmit.co/support@obelussoft.com"
          method="POST"
        >
          <label>
            <i className="fas fa-user"></i> Full Name
          </label>
          <input type="text" name="name" placeholder="Full Name" required />

          <label>
            <i className="fas fa-envelope"></i> Email Address
          </label>
          <input type="email" name="email" placeholder="Email" required />

          <label>
            <i className="fas fa-phone-alt"></i> Phone Number
          </label>
          <input type="phone" name="phone" placeholder="Phone" required />

          <label>
            <i className="fas fa-comment-dots"></i> Message
          </label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>

          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://obelussoft.com/thanks"
          />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_cc" value="svetlozar.01@abv.bg" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
