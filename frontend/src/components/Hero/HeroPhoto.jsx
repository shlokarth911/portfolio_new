import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./HeroPhoto.css";
import heroImage from "../../assets/hero image.png";

const HeroPhoto = () => {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      {
        width: "80%",
        borderRadius: "50px",
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
      onClick={() => (window.location = "mailto:shlokarth911@gmail.com")}
    >
      <img src={heroImage} alt="" />

      <div className="cursor" ref={cursorRef}>
        <span onMouseMove={handleInnerMouseMove} ref={textRef}>
          Mail Me
        </span>
      </div>

      <div className="about-video">
        <h1>A bit about me</h1>

        <p>
          I&apos;m a passionate full-stack developer driven by creativity,
          problem-solving, and clean design. Skilled in the MERN stack, Next.js,
          GSAP, and ShadCN UI, I craft seamless digital experiences that blend
          performance with aesthetics. From e-commerce platforms and delivery
          dashboards to educational apps and interactive portfolios, I enjoy
          building impactful projects that engage users. With a focus on
          innovation and scalability, I aim to deliver solutions that not only
          work but also inspire.
        </p>
      </div>
    </div>
  );
};

export default HeroPhoto;
