import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight, MoveRight } from "lucide-react";
import React, { useRef, useState } from "react";
import { data } from "../../data/projetcs.json";
import AnimatedButton from "../ui/AnimatedButton";

const Projects = () => {
  const titleRefs = useRef([]);
  const iconRefs = useRef([]);
  const imgRef = useRef(null);

  const projectsData = data;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const prevIndexRef = useRef(null);

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useGSAP(() => {
    const prev = prevIndexRef.current;
    const curr = hoveredIndex;

    if (reduceMotion) {
      projectsData.forEach((_, i) => {
        const t = titleRefs.current[i];
        const ic = iconRefs.current[i];
        if (!t && !ic) return;
        if (i === curr) {
          if (t) gsap.set(t, { borderBottomColor: "#fff" });
          if (ic) gsap.set(ic, { rotation: -45, x: 8 });
        } else {
          if (t) gsap.set(t, { borderBottomColor: "#333" });
          if (ic) gsap.set(ic, { rotation: 0, x: 0 });
        }
      });
      prevIndexRef.current = curr;
      return;
    }

    if (prev === curr) return;

    const animateItem = (i, open) => {
      const t = titleRefs.current[i];
      const ic = iconRefs.current[i];
      if (!t && !ic) return;

      if (open) {
        if (t)
          gsap.to(t, {
            borderBottomColor: "#fff",
            duration: 0.36,
            ease: "power3.out",
          });
        if (ic)
          gsap.to(ic, {
            x: 8,
            rotation: -45,
            duration: 0.45,
            ease: "power3.out",
          });
      } else {
        if (t)
          gsap.to(t, {
            borderBottomColor: "#333",
            duration: 0.32,
            ease: "power3.out",
          });
        if (ic)
          gsap.to(ic, {
            x: 0,
            rotation: 0,
            duration: 0.36,
            ease: "power3.out",
          });
      }
    };

    if (prev !== null && prev !== undefined && prev !== curr)
      animateItem(prev, false);
    if (curr !== null && curr !== undefined) animateItem(curr, true);

    if (imgRef.current) {
      gsap.killTweensOf(imgRef.current);
      gsap.to(imgRef.current, { autoAlpha: 0, duration: 0.12 }).then(() =>
        gsap.to(imgRef.current, {
          autoAlpha: 1,
          duration: 0.28,
          ease: "power2.out",
        })
      );
    }

    prevIndexRef.current = curr;
  }, [hoveredIndex, projectsData]);

  return (
    <section className="min-h-screen">
      <div className="w-full">
        <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extralight text-neutral-300 px-4 md:px-8 pt-6">
          Featured Projects
        </h1>

        <span className="font-display text-sm font-extralight text-neutral-300 px-4 md:px-8 block md:inline-block mt-2 md:mt-0">
          {
            "{ Hover over the titles to see more info — click a row to open the project link }"
          }
        </span>

        {/* Responsive layout: stack on small screens, two-column on md+ */}
        <div className="px-4 md:pl-8 flex flex-col md:flex-row items-start justify-between gap-8 mt-6">
          {/* Left: project list */}
          <div className="w-full md:w-2/3 flex flex-col gap-6">
            {projectsData.map((item, idx) => (
              <div
                key={idx}
                onClick={() => item.link && window.open(item.link, "_blank")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter")
                    item.link && window.open(item.link, "_blank");
                }}
                className="flex flex-col justify-between gap-3 border-b border-neutral-600 py-4 pr-3 relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700"
                onMouseEnter={() => setHoveredIndex(idx)}
                onFocus={() => setHoveredIndex(idx)}
              >
                <div
                  ref={(el) => (titleRefs.current[idx] = el)}
                  className="flex items-center justify-between gap-3"
                  aria-expanded={hoveredIndex === idx}
                >
                  <div className="flex items-end gap-3">
                    <span className="text-neutral-400 select-none text-sm sm:text-base">
                      .0{idx + 1}
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                      {item.title}
                    </h2>
                  </div>

                  <MoveRight
                    ref={(el) => (iconRefs.current[idx] = el)}
                    size={28}
                    className="text-neutral-300"
                    aria-hidden
                  />
                </div>
              </div>
            ))}

            <div className="pt-2">
              <AnimatedButton text={"See more"} link={"/work"} />
            </div>
          </div>

          {/* Right: preview pane */}
          <div className="w-full md:w-1/3 h-64 sm:h-80 md:h-[82vh] p-4 overflow-hidden rounded-xl bg-neutral-900/20 flex items-center justify-center">
            {projectsData[hoveredIndex]?.img ? (
              <img
                ref={imgRef}
                src={projectsData[hoveredIndex]?.img}
                alt={projectsData[hoveredIndex]?.title || ""}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            ) : (
              <div className="text-neutral-400 text-center px-4">
                Hover on a title to preview
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
