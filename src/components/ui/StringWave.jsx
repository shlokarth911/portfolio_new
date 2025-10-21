import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const StringWave = () => {
  const stringRef = useRef(null);

  useEffect(() => {
    const string = stringRef.current;
    if (!string) return;
    const path = string.querySelector("path");

    const handleMouseMove = (dets) => {
      let rect = string.getBoundingClientRect();
      let pathValue = `M 10 200 Q ${dets.x - rect.x} ${
        dets.y - rect.y
      } 1430 200`;

      gsap.to(path, {
        attr: { d: pathValue },
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(path, {
        attr: { d: "M 10 200 Q 500 200 1430 200" },
        duration: 1,
        ease: "elastic.out(1,0.3)",
      });
    };

    string.addEventListener("mousemove", handleMouseMove);
    string.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      string.removeEventListener("mousemove", handleMouseMove);
      string.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={stringRef}
      className="h-[200px] w-full flex items-center justify-center text-center"
    >
      <svg
        width="1500"
        height="350"
        xmlns="http://www.w3.org/2000/svg"
        className="relative overflow-visible w-fit"
        style={{ mixBlendMode: "difference", zIndex: -1 }}
      >
        <path
          d="M 10 200 Q 500 200 1430 200"
          stroke="#fff"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default StringWave;
