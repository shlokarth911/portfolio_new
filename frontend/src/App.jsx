import React, { useState, useRef, useEffect } from "react";
import NavButton from "./components/Navigation/NavButton";
import NavScreen from "./components/Navigation/NavScreen";
import NavImage from "./components/Navigation/NavImage";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Lenis from "@studio-freight/lenis";
import About from "./components/About/About";
import Upadates from "./components/Recent Updates/Upadates";
import MissionsHeader from "./components/Missions/MissionsHeader";
import Mission from "./components/Missions/Mission";
import Portals from "./components/Portals/Portals";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Footer from "./components/Footer/Footer";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useGSAP(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      gsap.to(cursorRef.current, {
        x,
        y,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const containerEl = containerRef.current;
    containerEl.addEventListener("mousemove", handleMouseMove);
    return () => {
      containerEl.removeEventListener("mousemove", handleMouseMove);
    };
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1, // smoothness
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // optional: scroll event
    lenis.on("scroll", ({ scroll, limit }) => {
      // console.log(scroll, limit);
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="container" ref={containerRef} id="container">
      {/* <div className="body-cursor" ref={cursorRef}></div> */}

      <nav>
        <NavImage />
        <NavButton onToggle={setIsNavOpen} />
      </nav>
      <NavScreen isOpen={isNavOpen} />

      <section className="section1">
        <Hero />
      </section>
      <section className="section2">
        <About />
      </section>
      <section className="section3">
        <Upadates />
      </section>
      <section className="section4">
        <MissionsHeader />
        <Mission />
      </section>
      <section className="section4">
        <Portals />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
