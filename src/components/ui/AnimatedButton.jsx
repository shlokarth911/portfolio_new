import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const AnimatedButton = ({ text, link }) => {
  const [isHover, setIsHover] = useState(false);
  const btnRef = useRef(null);
  const iconRef = useRef(null);
  const btnBorderRef = useRef(null);

  useEffect(() => {
    if (isHover) {
      gsap.to(btnBorderRef.current, {
        duration: 0.5,
        ease: "power4.out",
        transform: "translateX(0)",
      });
      gsap.to(iconRef.current, {
        transform: "rotate(45deg) translateX(100%) translateY(-100%) ",
        duration: 0.61,
        ease: "power4.out",
      });
      gsap.to(btnRef.current, {
        gap: "1.61rem",
        duration: 0.61,
        ease: "power4.out",
      });
    } else {
      gsap.to(btnBorderRef.current, {
        transform: "translateX(-105%)",
        height: "100%",
        width: "100%",
        duration: 0.61,
        ease: "power4.out",
        yoyo: true,
      });
      gsap.to(iconRef.current, {
        transform: "rotate(0deg) ",
        duration: 0.61,
        ease: "power4.out",
      });
      gsap.to(btnRef.current, {
        gap: "1rem",
        duration: 0.61,
        ease: "power4.out",
      });
    }
  }, [isHover]);

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  return (
    <div>
      <>
        <Link
          to={`${link}`}
          ref={btnRef}
          aria-label="About me"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="
          inline-flex
          cursor-pointer
            relative  items-center
            gap-2 sm:gap-3
            bg-neutral-100/10 text-white font-semibold
            text-sm sm:text-lg
            py-3 px-6 sm:py-5 sm:px-12
            rounded-full
            transition-colors duration-300
            focus:outline-none focus:ring-2 focus:ring-amber-300/40
            overflow-hidden
          "
        >
          <div
            ref={btnBorderRef}
            className="
              absolute top-0 left-0 z-[-1] flex items-center justify-center
              p-2 border rounded-full h-full w-full bg-neutral-50
            "
          ></div>{" "}
          <span className="mix-blend-difference">{text}</span>
          <span
            ref={iconRef}
            className="inline-flex items-center mix-blend-difference"
          >
            <ArrowUpRight />
          </span>
        </Link>
      </>
    </div>
  );
};

export default AnimatedButton;
