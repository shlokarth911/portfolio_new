import React from "react";
import IntroParas from "../components/about_page/IntroParas";
import NavBar from "../components/ui/Navbar";
import Services from "../components/about_page/Services";
import Footer from "../components/ui/Footer";
import Contact from "../components/about_page/Contact";

const About = () => {
  return (
    <div>
      <div className=" flex flex-col items-center w-full">
        <div className="max-w-[1900px]">
          <div className="p-8  ">
            <IntroParas />
          </div>
          <Services />
          <Contact />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
