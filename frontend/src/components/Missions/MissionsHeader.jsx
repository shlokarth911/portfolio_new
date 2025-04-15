import React, { useEffect, useRef } from "react";
import "./MissionsHeader.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MissionsHeader = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the header text size, color, and disable pointer events on it.
      gsap.to(containerRef.current.querySelector("h1"), {
        fontSize: "150vw",
        ease: "sine.out",
        color: "transparent",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom+=250% top",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      });

      // Animate the document body's background and text color.
      gsap.to(document.body, {
        backgroundColor: "#111",
        color: "#fff",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom+=300% top",
          scrub: 0.1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="missions-header-container">
      <h1>Missions</h1>
    </section>
  );
};

export default MissionsHeader;
