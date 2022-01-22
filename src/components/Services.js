import React from "react";
import { Link } from "react-router-dom";

import "./Services.css";

const Services = () => {
  return (
    <section className="services">
      <div className="services-wrapper">
        <h3>Our Services</h3>
        <div className="box-container">
          {/* Box 1 */}
          <div className="box-item">
            <div className="flip-box">
              <div className="flip-box-front text-center flip-box-front1">
                <div className="inner color-white">
                  <h4 className="flip-box-header">Website</h4>
                  <p>Your business deserves a great website design</p>
                  <img
                    src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                    alt="Website Card Background"
                    className="flip-box-img"
                  />
                </div>
              </div>
              <div className="flip-box-back text-center">
                <div className="inner color-white">
                  <h4 className="flip-box-header">Web Design</h4>
                  <p>
                    We will create a fully responsive website with clean,
                    semantic code and an entirely modern look.
                  </p>
                  <Link to="/services">
                    <button className="flip-box-button">Learn More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Box 2 */}
          <div className="box-item">
            <div className="flip-box">
              <div className="flip-box-front text-center flip-box-front2">
                <div className="inner color-white">
                  <h4 className="flip-box-header">SEO</h4>
                  <p>Get more website traffic, no bots - real visitors!</p>
                  <img
                    src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                    alt="SEO Card Background"
                    className="flip-box-img"
                  />
                </div>
              </div>
              <div className="flip-box-back text-center">
                <div className="inner color-white">
                  <h4 className="flip-box-header">SEO</h4>
                  <p>
                    Our comprehensive Search Engine Optimization package
                    contains keyword analysis, creating Google Analytics,
                    metadata descriptions, SEO audits, link building, and more.
                  </p>
                  <Link to="/services">
                    <button className="flip-box-button">Learn More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Box 3 */}
          <div className="box-item">
            <div className="flip-box">
              <div className="flip-box-front text-center flip-box-front3">
                <div className="inner color-white">
                  <h4 className="flip-box-header">Maintenance</h4>
                  <p>Every client deservs aftercare</p>
                  <img
                    src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                    alt="Maintenance Card Background"
                    className="flip-box-img"
                  />
                </div>
              </div>
              <div className="flip-box-back text-center">
                <div className="inner color-white">
                  <h4 className="flip-box-header">Dedicated</h4>
                  <p>
                    We offer a maintenance after we complete a project. Even
                    more, if a needed future upgrade or more extras we are here
                    to help always!
                  </p>
                  <Link to="/services">
                    <button className="flip-box-button">Learn More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
