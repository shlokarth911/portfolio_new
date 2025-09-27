// Upadates.js
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Skills.css";
import SkillsCard from "./SkillsCard";

gsap.registerPlugin(ScrollTrigger);

// Sample dynamic data and dynamic grid placement pattern
const skillsData = [
  {
    title: "Full-Stack Development",
    description:
      "I build scalable web applications using the MERN stack (MongoDB, Express, React, Node.js). From robust backends to dynamic frontends, I ensure seamless performance across the stack.",
  },
  {
    title: "UI/UX & Animations",
    description:
      "I create interactive, visually appealing interfaces with GSAP, ShadCN UI, and custom design principles. My focus is on delivering experiences that feel smooth, engaging, and modern.",
  },
  {
    title: "Performance & Scalability",
    description:
      "I optimize applications for speed and scalability, ensuring they can handle growth without compromising user experience or efficiency.",
  },
  {
    title: "Tools & Workflow",
    description:
      "I'm comfortable with Git, VS Code, APIs, and modern development workflows. I value clean, maintainable code and effective collaboration.",
  },
  // Additional cards will follow the same dynamic positioning logic.
];

const Skills = () => {
  const containerRef = useRef(null);

  // Define a repeating pattern for dynamic grid positioning (if needed)
  const pattern = [
    { row: 1, col: 3 }, // Example position for card 1
    { row: 2, col: 2 }, // Example position for card 2
    { row: 3, col: 1 }, // Example position for card 3
    { row: 4, col: 2 }, // Example position for card 4
  ];

  useEffect(() => {
    const container = containerRef.current;
    const cardContainer = container.querySelector(".card-container");

    // First: Pin the updates container so that it locks at the top.
    // The pinned duration is equal to the height of the card container.
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: () => `+=${cardContainer.offsetHeight}`,
      pin: true,
      scrub: 1,
      // markers: true, // Uncomment to debug the trigger positions.
    });

    // Second: Animate the cards container so that it moves up (scrolls) as you progress.
    // We translate it upward from 0 to negative of (its full height minus the viewport height).
    gsap.to(cardContainer, {
      y: -cardContainer.offsetHeight + window.innerHeight,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${cardContainer.offsetHeight}`,
        scrub: true,
        // markers: true, // Uncomment to debug the tween.
      },
    });

    // Clean up ScrollTriggers on unmount.
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="skills-container" ref={containerRef}>
      <h1>My SkillSet</h1>
      <div className="card-container">
        {skillsData.map((update, idx) => {
          // For dynamic grid positioning, compute the cycle and position.
          // (This part is optional if you already have a fixed grid pattern.)
          const cycle = Math.floor(idx / pattern.length);
          const pos = pattern[idx % pattern.length];
          const gridRow = pos.row + cycle * 4; // 4 rows per cycle.
          const gridCol = pos.col;
          const style = {
            gridRow,
            gridColumn: gridCol,
          };

          return (
            <SkillsCard
              key={idx}
              title={update.title}
              description={update.description}
              style={style}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
