import React, { useRef } from "react";
import Spline from "@splinetool/react-spline";
import AnimatedButton from "../ui/AnimatedButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const modelRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(modelRef.current, {
      display: "none",
      opacity: "0",
      scrollTrigger: {
        trigger: modelRef.current,
        start: "top -40%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Spline background: hidden on small screens for performance */}
      <div
        ref={modelRef}
        className="hidden md:block absolute inset-0 pointer-events-none -z-10"
      >
        <Spline
          className="w-full h-full"
          scene="https://prod.spline.design/GTbMCAuRC-c5Ya6m/scene.splinecode"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10 px-6">
        <div className="w-full max-w-6xl text-center ">
          <h3
            className="font-display font-extralight text-neutral-300 mb-2 mix-blend-difference"
            style={{ fontSize: "clamp(1rem, 2.2vw, 1.5rem)" }}
          >
            Hi, I'm
          </h3>

          <h1
            className="font-display font-extralight leading-tight tracking-[0.1611em] "
            style={{
              fontSize: "clamp(2.5rem, 9vw, 6.44rem)",
            }}
          >
            SHLOK ARTH
          </h1>

          <p
            className="font-display font-extralight mt-4 max-w-3xl mx-auto text-neutral-300"
            style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.61rem)" }}
          >
            Catch me turning ideas into live code "the full stack", no cap
          </p>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-wrap justify-center gap-3 items-center px-4">
        <AnimatedButton link={"/contact"} text={"Get in Touch"} />
        <AnimatedButton link={"/work"} text={"Projects"} />
      </div>
    </section>
  );
};

export default Hero;
