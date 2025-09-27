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
        <div className="text-content headline">CRAFTING DIGITAL EXCELLENCE</div>
        <div className="text-content tagline">— PIXELS MEET PURPOSE</div>
        <div className="para-content">
          <p>
            With a strong foundation in full-stack development, I specialize in
            building intuitive, high-performing applications that merge
            functionality with design. My expertise spans MongoDB, Express,
            React, and Node.js, along with frameworks like Next.js for modern
            frontends. I&apos;m also deeply interested in animation and
            interaction, using GSAP and ShadCN UI to craft immersive user
            experiences. Beyond technical skills, I thrive on solving real-world
            problems—whether developing scalable dashboards, interactive
            educational tools, or creative portfolios that leave a lasting
            impression.
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
