import React from "react";

import "./Delivery.css";

const Delivery = () => {
  return (
    <section className="delivery">
      <div className="delivery-wrapper">
        <h3>Work Process</h3>
        <div className="delivery-boxes">
          <div className="delivery-box">
            <div className="delivery-img-box delivery-img1">
              <span>1</span>
            </div>
            <p>CONSULTATION WITH AN EXPERT</p>
          </div>
          <div className="delivery-box">
            <div className="delivery-img-box delivery-img2">
              <span>2</span>
            </div>
            <p>DESCRIPTION OF YOUR REQUIREMENTS </p>
          </div>
          <div className="delivery-box">
            <div className="delivery-img-box delivery-img3">
              <span>3</span>
            </div>
            <p>WEBSITE DEVELOPMENT WITHIN 7 WORKING DAYS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
