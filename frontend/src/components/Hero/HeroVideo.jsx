import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./HeroVideo.css";

const HeroVideo = () => {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      {
        width: "80%",
        borderRadius: "17px",
        filter: "grayscale(0.8)",
      },
      {
        width: "100%",
        borderRadius: "0px",
        filter: "grayscale(0)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 55%",
          end: "top 10%",
          scrub: true,
        },
      }
    );

    // Mouse move effect: update cursor position relative to container
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
  }, []);

  // Mouse enter: enlarge the cursor ball (bubbly effect)
  const handleMouseEnter = () => {
    gsap.to(cursorRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // Mouse leave: reset cursor ball scale and 3D rotation of the text
  const handleMouseLeave = () => {
    gsap.to(cursorRef.current, {
      scale: 0,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(textRef.current, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // Extra inner mouse move: update the 3D tilt of the text
  const handleInnerMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    gsap.to(cursorRef.current, {
      x,
      y,
      duration: 1,
      ease: "power1.out",
    });

    // Calculate offset from the center for 3D rotation
    const cx = e.clientX - (rect.left + rect.width / 2);
    const cy = e.clientY - (rect.top + rect.height / 2);
    gsap.to(textRef.current, {
      rotationX: cy * 0.05,
      rotationY: -cx * 0.05,
      transformPerspective: 400,
      duration: 0.3,
      ease: "power1.out",
    });
  };

  return (
    <div
      className="video-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      <img
        src="https://www.isro.gov.in/media_isro/image/index/GSLV_F15_NVS_02/Post_launch/01.jpg"
        alt=""
      />

      <div className="cursor" ref={cursorRef}>
        <span onMouseMove={handleInnerMouseMove} ref={textRef}>
          Watch Now
        </span>
      </div>

      <div className="about-video">
        <h1>100th launch from Sriharikota</h1>

        <p>
          ISRO is preparing for its landmark 100th launch from Sriharikota. GSLV
          F15 will lift-off from the second launch pad at 06:23 hrs on January
          29, 2025, carrying the NVS-02 navigation satellite. This will be the
          100th launch to lift-off from Sriharikota. Over a span of 99 launches,
          various missions have been carried out from Sriharikota.
        </p>
      </div>
    </div>
  );
};

export default HeroVideo;
