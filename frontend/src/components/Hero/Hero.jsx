import React from "react";
import "./Hero.css";
import HeroPhoto from "./HeroPhoto";

const Hero = () => {
  return (
    <div className="hero">
      <span>Hi, I'm</span>
      <h1 className="header"> Shlok Arth</h1>
      <p>
        "I&apos;m a full-stack developer passionate about blending creativity
        with technology, building scalable apps, interactive dashboards, and
        sleek portfolios using MERN, React, Next.js, GSAP, and modern UI
        tools.""
      </p>
      <HeroPhoto />
    </div>
  );
};

export default Hero;
