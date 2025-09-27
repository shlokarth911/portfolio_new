import React, { useRef, useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Lenis from "@studio-freight/lenis";
import About from "./components/About/About";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Footer from "./components/Footer/Footer";
import ProjectsHeader from "./components/Projects/ProjectsHeader";
import Projects from "./components/Projects/Projects";
import Skills from "./components/SkillSet/Skills";
import Socials from "./components/Socials/Socials";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);

  // mouse cursor follow (desktop)
  useGSAP(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current || !cursorRef.current) return;
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
    if (!containerEl) return;
    containerEl.addEventListener("mousemove", handleMouseMove);
    return () => containerEl.removeEventListener("mousemove", handleMouseMove);
  });

  // Lenis setup (smooth desktop + touch) + ScrollTrigger integration
  useEffect(() => {
    // create lenis
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      // enable smoothing for touch devices (important for devtools device emulation)
      smoothTouch: true,
      // tune responsiveness for touch
      touchMultiplier: 2,
      // tune wheel (desktop) multiplier if needed
      wheelMultiplier: 1,
    });

    // keep ScrollTrigger updated when Lenis scrolls
    const onLenisScroll = () => {
      ScrollTrigger.update();
    };
    lenis.on("scroll", onLenisScroll);

    // Make ScrollTrigger use Lenis as the scroller
    // We proxy the documentElement (html) / scrollingElement so GSAP thinks it's scrolling normally.
    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        // getter
        if (arguments.length === 0) {
          return lenis.scroll; // current scroll position from lenis
        }
        // setter
        lenis.scrollTo(value);
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // pinType fallback: use transform for smoother pinning where available
      pinType: document.documentElement.style.transform ? "transform" : "fixed",
    });

    // If you create ScrollTrigger instances that rely on `scroller`, they will work after this.
    // Make sure any existing ScrollTrigger uses the default scroller (document) or specify `scroller`.
    ScrollTrigger.defaults({ scroller: document.documentElement });

    // RAF loop for Lenis (lenis.raf expects a timestamp)
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // refresh on resize to keep things in sync
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      lenis.off("scroll", onLenisScroll);
      // lenis.destroy() will remove its listeners and stop RAF internal timers
      if (typeof lenis.destroy === "function") lenis.destroy();
      // reset scrollerProxy to default (optional)
      try {
        ScrollTrigger.removeEventListener &&
          ScrollTrigger.removeEventListener("refresh", ScrollTrigger.refresh);
      } catch (e) {
        console.log(e);
      }
    };
  }, []); // run once

  return (
    <div className="container" ref={containerRef} id="container">
      {/* uncomment if you want a custom cursor */}
      {/* <div className="body-cursor" ref={cursorRef}></div> */}

      <section className="section1">
        <Hero />
      </section>

      <section className="section2">
        <About />
      </section>

      <section className="section3">
        <Skills />
      </section>

      <section className="section4">
        <ProjectsHeader />
        <Projects />
      </section>

      <section className="section4">
        <Socials />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
