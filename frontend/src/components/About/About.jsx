import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // useEffect(() => {
  //   gsap.to(".visual-content img", {
  //     y: "-10%",
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".about-section",
  //       start: "top 100%",
  //       end: "top 0%",
  //       scrub: true,
  //     },
  //   });
  // }, []);

  return (
    <section className="about-section">
      <div className="about-part-1">
        <div className="text-content headline">EXPLORING THE COSMOS</div>
        <div className="text-content tagline">
          — ISRO, WHERE INNOVATION MEETS INFINITY
        </div>
        <div className="para-content">
          <p>
            ISRO, India’s pioneering space agency, has revolutionized space
            exploration since 1969. From landmark missions like Chandrayaan-3
            and Mangalyaan to advancing human spaceflight (Gaganyaan) and
            satellite navigation (NavIC), we merge cutting-edge innovation with
            affordability to drive national progress and global collaboration.
            Through satellite technology, we empower agriculture, disaster
            resilience, and climate action, guided by the ethos स्वदेशे
            सर्वजनाभ्युदय (Prosperity to All) and वसुधैव कुटुम्बकम (The World Is
            One Family). At ISRO, we explore the cosmos to transform life on
            Earth.
          </p>
        </div>
      </div>

      <div className="about-part-2">
        <div className="visual-content">
          <img
            src="https://media.wired.com/photos/595461288e8cc150fa8ebb79/master/pass/hs-2006-14-f-hires_jpg.jpg"
            alt="ISRO launch showcasing innovation in space exploration"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
