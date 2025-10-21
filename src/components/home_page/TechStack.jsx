import React from "react";

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

  return (
    <div className="w-screen flex items-center justify-end flex-col pb-[2%] relative overflow-visible">
      {/* Header (stroked, large, translated like original) */}
      <h1 className="header select-none pointer-events-none absolute left-1/2 transform -translate-x-1/2 top-0 translate-y-[25%] text-[12vw] font-display font-light leading-[0.9] text-neutral-300">
        TechStack
      </h1>

      {/* Grid container */}
      <div className="mt-[20vh] w-[76%] md:w-[76%] sm:w-[90%] h-[70vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[0.5%]">
        {socialsData.map((item, idx) => (
          <button
            key={idx}
            className="group relative overflow-hidden  border border-[#333] p-[6%] flex flex-col justify-between items-start backdrop-blur-sm bg-transparent transition-all duration-500"
            aria-label={item.title}
          >
            {/* overlay element (replaces ::after) */}
            <span
              aria-hidden
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full  border border-transparent transition-all duration-500 pointer-events-none z-10"
              style={{ boxSizing: "border-box" }}
            />

            <h2 className="z-20 text-[28px] font-medium leading-tight mb-4">
              {item.title}
            </h2>

            <div className="w-full flex flex-col items-start justify-start">
              <p className="z-20 text-neutral-400 transform translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {item.confidence}
              </p>
              <p className="z-20 text-neutral-400 transform translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {item.experience}
              </p>
            </div>

            {/* helper element to animate overlay border color/size on hover using group-hover classes via inline style tag below */}
            <span
              aria-hidden
              className="absolute inset-0 rounded-md pointer-events-none z-0"
              style={{ border: "1px solid transparent" }}
            />
          </button>
        ))}
      </div>

      {/* Responsive header font-size adjustments and overlay hover tweaks */}
      <style>{`
        /* Responsive font-size adjustments to match your media queries:
           - Default (desktop) = 12vw
           - <=768px ~ 15vw (we make this at max-width 768)
           - <=480px ~ 20vw
        */
        @media (max-width: 768px) {
          .header { font-size: 15vw !important; }
        }
        @media (max-width: 480px) {
          .header { font-size: 20vw !important; }
        }

        /* Match original overlay hover behavior:
           - default overlay is full size with transparent border
           - on hover: border-color -> #999, height -> 90%, width -> 95%
        */
        .group:hover > span.absolute.left-1\\/2 {
          width: 95% !important;
          height: 90% !important;
          border-color: #999 !important;
        }

        /* Title size responsivity to match original CSS:
           default: 28px, <=768px: 24px, <=480px: 20px
        */
        @media (max-width: 768px) {
          .group h2 { font-size: 24px !important; }
        }
        @media (max-width: 480px) {
          .group h2 { font-size: 20px !important; }
        }

        /* For smallest screens: adjust grid to 1 column and spacing like original */
        @media (max-width: 480px) {
          .w-[76%] { width: 90% !important; } /* ensure container width shrinks on small screens */
          .grid { gap: 10px !important; }
        }

        /* IMPORTANT: On touch devices (no hover + coarse pointer) show confidence & experience by default
           without changing the desktop hover effects. */
        @media (hover: none) and (pointer: coarse) {
          .group p {
            transform: translateY(0) !important;
            opacity: 1 !important;
          }
          /* ensure overlay border change still works on touch focus */
          .group:active > span.absolute.left-1\\/2,
          .group:focus > span.absolute.left-1\\/2 {
            width: 95% !important;
            height: 90% !important;
            border-color: #999 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TechStack;
