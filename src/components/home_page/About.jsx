import { ArrowUpRight } from "lucide-react";
import React from "react";
import AnimatedButton from "../ui/AnimatedButton";

const About = () => {
  return (
    <section className="mt-20 flex flex-col items-center justify-center">
      <div className="p-4 flex flex-col items-center max-w-[940px] w-full border-t border-neutral-200/10 md:py-[4.5rem]">
        <p className="font-display md:text-3xl sm:text-2xl text-center text-neutral-100  max-w-[56rem] font-light">
          I&apos;m a{" "}
          <span className="italic text-amber-400 text-shadow-amber-400/50 text-shadow-lg">
            front-end developer
          </span>{" "}
          and creative technologist blending design, code, and motion to craft
          interfaces that feel alive. With{" "}
          <span className="text-[#00d8ff] font-mono">React</span>,{" "}
          <span className="text-[#ebebeb] font-mono">Next.js</span>, and{" "}
          <span className="text-[#53f513] font-mono">GSAP</span>, I create
          functional, cinematic experiences that are immersive and memorable.
        </p>

        <div className="mt-5">
          <AnimatedButton text={"About Me"} link={"/about"} />
        </div>
      </div>
    </section>
  );
};

export default About;
