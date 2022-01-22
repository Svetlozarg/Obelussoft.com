import React from "react";

import "./PortfolioCard.css";

const PortfolioCard = ({ src, name, text, link }) => {
  return (
    <div className="portfolio-card">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={src} alt="" />
      </a>
      <div className="portfolio-cont">
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
