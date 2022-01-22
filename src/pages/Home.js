import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Delivery from "../components/Delivery";
import Offers from "../components/Offers";
import Contact from "../components/Contact";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Helmet>
        <title>ObelusSoft</title>
      </Helmet>
      <Hero />
      <About />
      <Services />
      <Delivery />
      <Offers />
      <Contact />
    </main>
  );
};

export default Home;
