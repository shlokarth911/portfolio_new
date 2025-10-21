import React from "react";
import Hero from "../components/home_page/Hero";
import About from "../components/home_page/About";
import Projects from "../components/home_page/Projects";
import TechStack from "../components/home_page/TechStack";
import Contact from "../components/home_page/Contact";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";

const Home = () => {
  return (
    <div className="max-w-[100vw] overflow-hidden">
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
