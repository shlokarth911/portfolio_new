import React from "react";
import "./Hero.css";
import HeroVideo from "./HeroVideo";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="header">Indian Space Research Organisation</h1>
      <p>
        "From Earth’s soil to the cosmos, ISRO ignites the spirit of
        exploration—turning dreams into orbits, uniting science with the soul of
        a nation.
      </p>
      <HeroVideo />
    </div>
  );
};

export default Hero;
