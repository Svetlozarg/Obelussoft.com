import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import PortfolioCard from "../components/PortfolioCard";

import "./Portfolio.css";

// import fishontoast from "../images/fishontoast.png";
// import santovets from "../images/santovets.png";
// import skyplace from "../images/skyplace.png";
// import life24 from "../images/life24.png";
// import covid19 from "../images/covid19.png";
// import mountains from "../images/mountains.png";
// import quizzle from "../images/quizzle.png";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Helmet>
        <title>ObelusSoft | Portfolio</title>
      </Helmet>
      <div className="portfolio-bg">
        <h1>Our Portfolio</h1>
        <div className="portfolio-wrapper">
          <PortfolioCard
            src="https://ik.imagekit.io/obelussoft/fishontoast_Fbj_lHKOC.png"
            name="Fishontoast.co.uk"
            text="Fish on Toast is a student society that motivates students to attend workshops and lectures to better understand the path to success. Its slogan is: Inspiring the Entrepreneurial Leaders of Tomorrow."
            link="https://fishontoast.co.uk"
          />
          <PortfolioCard
            src="https://ik.imagekit.io/obelussoft/santovets_WcA-F8tXcv.png"
            name="Santovets.com"
            text="Santovets is a project that aims to advertise a marvelous house in Bulgaria."
            link="https://www.santovets.com"
          />
          <PortfolioCard
            src="https://ik.imagekit.io/obelussoft/skyplace_GAzLP8yzz.png"
            name="Skyplace.live"
            text="A weather forecast web project - a custom build with its functionality to display current, hourly and daily weather data."
            link="https://skyplace.live"
          />
          <PortfolioCard
            src="https://ik.imagekit.io/obelussoft/life24_buRwh_l3m.png"
            name="Life24.shop"
            text="Life24 is an e-commerce project that promotes emergency devices targeting older people."
            link="https://life24.vercel.app"
          />
          {/* <PortfolioCard
            src="https://ik.imagekit.io/obelussoft/covid19_0hHJQdXDv.png"
            name="Covid19data.app"
            text="Covid19data is a project that displays the general data for all covid cases, deaths and recovers for every country."
            link="https://covid-tracker-lac.vercel.app"
          />
          <PortfolioCard
            src="https://ik.imagekit.io/obelussoft/mountains_eH2X7kewY.png"
            name="Mountains-landing.com"
            text="Mountains-landing is a landing project that presents a life of a blogger."
            link="https://mountains-landing.vercel.app"
          /> */}
          <PortfolioCard
            src="https://ik.imagekit.io/obelussoft/quizzle_yyd1qmMiD.png"
            name="Quizzle.fun"
            text="Quizzle is a browser game that offers multiplayer battles, rank lists, personal best scores, etc. The aim of the game is to answer questions on different topics to compete for the highest score."
            link="https://quizzle.fun"
          />
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
