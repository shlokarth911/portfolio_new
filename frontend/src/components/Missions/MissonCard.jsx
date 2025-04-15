import React, { useEffect, useRef } from "react";
import "./MissionCard.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MissionCard = ({ title, desc, item, img }) => {
  // Create a reference to the mission card element
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.from(cardRef.current, {
      scale: 0.9,
      opacity: 0.85, // opacity value as a number
      duration: 0.75,
      ease: "none",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 100%",
        end: "top 50%",
        scrub: 1,
      },
    });
  }, []);

  console.log(item);

  return (
    <div className="mission-card" ref={cardRef}>
      <div className="mission-card-part-1">
        <h1>{title}</h1>
        <p>{desc}</p>
        <ul>
          {item.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
        <button>Know More</button>
      </div>
      <div className="mission-card-part-2">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default MissionCard;
