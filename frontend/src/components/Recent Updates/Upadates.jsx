// Upadates.js
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Updates.css";
import UpdateCard from "./UpdateCard";

gsap.registerPlugin(ScrollTrigger);

// Sample dynamic data and dynamic grid placement pattern
const updatesData = [
  {
    title: "GSLV-F15 / NVS-02 MISSION",
    description:
      "GSLV-F15 is the 17th flight of India's Geosynchronous Satellite Launch Vehicle (GSLV) and 11th flight with Indigenous Cryo stage.",
  },
  {
    title: "PSLV C60/SPADEX Mission",
    description:
      "SpaDeX mission is a cost-effective technology demonstrator mission for the demonstration of in-space docking using two small spacecraft launched by PSLV.",
  },
  {
    title: "PSLV-C59/Proba-3 Mission",
    description:
      "PSLV-C59 vehicle carried Proba-3 spacecraft into a highly elliptical orbit as a Dedicated commercial mission of NewSpace India Limited (NSIL) on December 05, 2024.",
  },
  {
    title: "SSLV-D3/EOS-08 Mission",
    description:
      "The third developmental flight of SSLV is successfully launched on August 16, 2024.This flight completes the SSLV Development Project and enables operational missions by Indian industry and NSIL.",
  },
  // Additional cards will follow the same dynamic positioning logic.
];

const Upadates = () => {
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
    <div className="updates-container" ref={containerRef}>
      <h1>Recent Updates</h1>
      <div className="card-container">
        {updatesData.map((update, idx) => {
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
            <UpdateCard
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

export default Upadates;
