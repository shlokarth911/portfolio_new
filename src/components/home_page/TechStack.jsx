import React, { useEffect, useRef, useState } from "react";

const TechStack = () => {
  // Modify the data
  const socialsData = [
    {
      title: "HTML",
      confidence: "Confidence : 90%",
      experience: "Experience : 2 years",
    },
    {
      title: "CSS",
      confidence: "Confidence : 85%",
      experience: "Experience : 1.85 years",
    },
    {
      title: "JavaScript",
      confidence: "Confidence : 70%",
      experience: "Experience : 1.5 years",
    },
    {
      title: "Git and GitHub",
      confidence: "Confidence : 75%",
      experience: "Experience : 1.2 years",
    },
    {
      title: "React Js",
      confidence: "Confidence : 80%",
      experience: "Experience : 1 years",
    },
    {
      title: "Node JS",
      confidence: "Confidence : 75%",
      experience: "Experience : 1 years",
    },
    {
      title: "Next JS",
      confidence: "Confidence : 80%",
      experience: "Experience : 1 years",
    },
    {
      title: "Tailwind CSS",
      confidence: "Confidence : 80%",
      experience: "Experience : 1 years",
    },
    {
      title: "Figma",
      confidence: "Confidence : 50%",
      experience: "Experience : 1 years",
    },
  ];

  // Track which card is "hovered" (active) — -1 means none.
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef(null);

  // Click/tap outside to clear active state
  useEffect(() => {
    const handleDocClick = (e) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) {
        setActiveIndex(-1);
      }
    };
    document.addEventListener("pointerdown", handleDocClick);
    return () => document.removeEventListener("pointerdown", handleDocClick);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-screen flex items-center justify-end flex-col pb-[2%] relative overflow-visible "
    >
      {/* Header (stroked, large, translated like original) */}
      <h1 className="header select-none pointer-events-none absolute left-1/2 transform -translate-x-1/2 top-0 translate-y-[25%] text-[12vw] font-display font-light leading-[0.9] text-neutral-300 mix-blend-difference">
        TechStack
      </h1>

      {/* Grid container */}
      <div className="mt-[20vh] w-[76%] md:w-[76%] sm:w-[90%] h-[70vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[0.5%] backdrop-blur-base">
        {socialsData.map((item, idx) => {
          const isActive = activeIndex === idx;
          return (
            <div
              key={idx}
              aria-label={item.title}
              aria-pressed={isActive}
              // Add or remove the 'hover' class so CSS :hover styling can be reused
              className={`group relative overflow-hidden border border-[#333] p-[6%] flex flex-col justify-between items-start backdrop-blur-xl bg-transparent transition-all duration-500 ${
                isActive ? "hover" : ""
              }`}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() =>
                setActiveIndex((cur) => (cur === idx ? -1 : cur))
              }
              onFocus={() => setActiveIndex(idx)}
              onBlur={() => setActiveIndex((cur) => (cur === idx ? -1 : cur))}
              // For touch devices: toggle on touch start / click
              onTouchStart={(e) => {
                // prevent immediate document pointerdown listener from clearing it
                e.stopPropagation();
                setActiveIndex((cur) => (cur === idx ? -1 : idx));
              }}
              onClick={(e) => {
                // fallback for devices that translate tap to click
                e.stopPropagation();
                setActiveIndex((cur) => (cur === idx ? -1 : idx));
              }}
            >
              <span
                aria-hidden
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-transparent transition-all duration-500 pointer-events-none z-10 "
                style={{ boxSizing: "border-box" }}
              />

              <h2 className="z-20 text-[28px] font-medium leading-tight mb-4 ">
                {item.title}
              </h2>

              <div className="w-full flex flex-col items-start justify-start mb-[6%]">
                <p className="z-20 text-neutral-400 transform translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.confidence}
                </p>
                <p className="z-20 text-neutral-400 transform translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.experience}
                </p>
              </div>

              <span
                aria-hidden
                className="absolute inset-0 rounded-md pointer-events-none z-0"
                style={{ border: "1px solid transparent" }}
              />
            </div>
          );
        })}
      </div>

      {/* Responsive header font-size adjustments and overlay hover tweaks */}
      <style>{`
        @media (max-width: 768px) {
          .header { font-size: 15vw !important; }
        }
        @media (max-width: 480px) {
          .header { font-size: 20vw !important; }
        }

        /* IMPORTANT: reuse hover styles for both :hover and our .hover class */
        .group:hover > span.absolute.left-1\\/2,
        .group.hover > span.absolute.left-1\\/2 {
          width: 95% !important;
          height: 90% !important;
          border-color: #999 !important;
        }

        /* Also reveal the info when the .hover class is present (touch) */
        .group.hover p,
        .group:focus p {
          transform: translateY(0) !important;
          opacity: 1 !important;
        }

        @media (max-width: 768px) {
          .group h2 { font-size: 24px !important; }
        }
        @media (max-width: 480px) {
          .group h2 { font-size: 20px !important; }
          .w-[76%] { width: 90% !important; }
          .grid { gap: 10px !important; }
        }

        /* keep desktop hover semantics for pointer-capable devices as well */
        @media (hover: none) and (pointer: coarse) {
          /* we don't force the p visible here anymore — touch toggles the class */
        }
      `}</style>
    </div>
  );
};

export default TechStack;
