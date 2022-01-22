import React from "react";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <h1>
          Obelus<span>Soft</span>
        </h1>
        <p>
          Building your <span className="span-red">success</span> online.
          Advancing <span className="span-red">beyond</span>.
        </p>
        <p>English / Bulgarian Support</p>
      </div>
    </section>
  );
};

export default Hero;
