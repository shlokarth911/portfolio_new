import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./NavScreen.css";

const menuData = [
  {
    title: "About",
    links: [
      "Profile",
      "Vision-Mission-Objectives",
      "Citizen Charter",
      "Organisational Structure",
      "DoS Centre/Units/Endpoints",
      "Secretary",
      "Chairman",
      "Space Commission",
      "Autonomous Bodies",
      "Genesis",
      "Timeline",
    ],
  },
  {
    title: "Services",
    links: [
      "Launch Service",
      "Satellite: System, Bus, Sub-system, Testing",
      "Mission Support",
      "Ground Systems Support",
      "Satellite Communication & Lease of Transponders",
      "Space-based Earth Observation: Bhuvan & Bhoonidhi",
      "Satellite Navigation Services",
      "Meteorological & Oceanographic Satellite Data",
      "Disaster Management: National & International",
      "Aerial Services & Digital Mapping",
      "North-East India Region-specific Applications Services",
      "VEDAS Services",
    ],
  },
  {
    title: "Activities",
    links: [
      "Mission Accomplished",
      "Upcoming Missions",
      "Science",
      "Launchers",
      "Satellites",
      "Space Applications",
      "Research and Development",
      "Ground Segment Activities",
      "Promotion and Authorization",
      "International Cooperation",
      "Capacity Building",
      "Outreach",
    ],
  },
  {
    title: "Programmes",
    links: [
      "Academic Courses",
      "Conference Grants",
      "Fellowships",
      "Internships",
      "Space Merchandise",
      "Space Tutor",
      "Space on Wheels",
      "Student Satellite",
      "Technology Transfer",
      "UNNATI",
      "YUVIKA",
    ],
  },
  {
    title: "Resources",
    links: [
      "Atlases: River Basin",
      "Bhuvan",
      "Database for Emergency Management",
      "FEAST Tool",
      "I-GRASP",
      "Info for Climate & Environment Studies",
      "Landslide Atlas of India",
      "Meteorology & Oceanographic Data",
      "Mobile Apps",
      "Monthly Summary of DOS",
    ],
  },
  {
    title: "Engagements",
    links: ["Academia", "Ask an Expert", "Educators", "Media", "Public"],
  },
];

const NavScreen = ({ isOpen }) => {
  const containerRef = useRef(null);
  const rollerRef = useRef(null);
  const rollerMaskRef = useRef(null);
  const touchStartYRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Open/close animation using useGSAP
  useGSAP(() => {
    if (isOpen) {
      // Reset the element to hidden, collapsed state
      gsap.set(containerRef.current, {
        display: "flex",
        opacity: 0,
        scaleX: 0,
        scaleY: 0,
        filter: "blur(30px)",
        boxShadow: "0 0 200px rgba(0,255,255,0.1)",
        transformOrigin: "center",
      });
      // Sci-fi boot-up sequence
      gsap
        .timeline()
        .to(containerRef.current, {
          scaleY: 1,
          duration: 0.3,
          ease: "power4.out",
        })
        .to(
          containerRef.current,
          {
            scaleX: 1,
            duration: 0.4,
            ease: "expo.out",
          },
          "-=0.2"
        )
        .to(
          containerRef.current,
          {
            opacity: 1,
            filter: "blur(0px)",
            boxShadow:
              "0 0 80px rgba(0,255,255,0.4), inset 0 0 30px rgba(0,255,255,0.2)",
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          containerRef.current,
          {
            boxShadow:
              "0 0 25px rgba(0,255,255,0.2), inset 0 0 10px rgba(0,255,255,0.1)",
            duration: 0.6,
            ease: "sine.inOut",
          },
          "-=0.4"
        );
    } else {
      // Sci-fi screen fold-down and power-off
      gsap
        .timeline()
        .to(containerRef.current, {
          filter: "blur(10px)",
          scaleX: 1,
          scaleY: 1,
          duration: 0.2,
          ease: "power2.inOut",
        })
        .to(
          containerRef.current,
          {
            scaleX: 2,
            scaleY: 2,
            opacity: 0,
            duration: 0.4,
            ease: "expo.in",
            onComplete: () => {
              gsap.set(containerRef.current, {
                display: "none",
                boxShadow: "none",
              });
            },
          },
          "-=0.1"
        );
    }
  }, [isOpen]);

  // Reset roller to first index when navscreen is opened
  useEffect(() => {
    if (isOpen) {
      // Reset state and scroll position when opening
      setIndex(0);
      requestAnimationFrame(() => scrollToIndex(0));
    }
  }, [isOpen]);

  // Center selected index in roller
  const scrollToIndex = (newIndex) => {
    const clampedIndex = Math.max(0, Math.min(menuData.length - 1, newIndex));
    const itemEls = rollerRef.current?.querySelectorAll(".roller-item");
    if (!itemEls || !itemEls[clampedIndex]) return;

    const activeItem = itemEls[clampedIndex];
    const maskRect = rollerMaskRef.current?.getBoundingClientRect();
    if (!maskRect) return;

    const centerOffset = maskRect.height / 2 - activeItem.offsetHeight / 2;
    const yOffset = -activeItem.offsetTop + centerOffset;

    gsap.to(rollerRef.current, {
      y: yOffset,
      duration: 0.5,
      ease: "power2.out",
    });

    setIndex(clampedIndex);
  };

  // Handle scroll wheel events
  const handleWheel = (e) => {
    e.preventDefault();
    scrollToIndex(index + (e.deltaY > 0 ? 1 : -1));
  };

  // Handle touch start: record starting Y coordinate
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      touchStartYRef.current = e.touches[0].clientY;
    }
  };

  // Handle touch move: compare current Y against starting Y, then trigger scroll
  const handleTouchMove = (e) => {
    if (touchStartYRef.current === null) return;
    const touchCurrentY = e.touches[0].clientY;
    const diff = touchStartYRef.current - touchCurrentY;
    const threshold = 50; // adjust the sensitivity threshold as needed
    if (Math.abs(diff) > threshold) {
      scrollToIndex(index + (diff > 0 ? 1 : -1));
      // Reset the start position to avoid multiple triggers
      touchStartYRef.current = null;
      // Prevent default behavior to avoid conflict with scrolling
      e.preventDefault();
    }
  };

  // Clear touch start on touch end
  const handleTouchEnd = () => {
    touchStartYRef.current = null;
  };

  // Add wheel event listener
  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [index]);

  // Add touch event listeners to the container
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      container.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      container.addEventListener("touchend", handleTouchEnd, {
        passive: true,
      });
    }
    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
        container.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [index]);

  // Animate roller items based on index changes
  useEffect(() => {
    const items = gsap.utils.toArray(".roller-item");
    items.forEach((item, i) => {
      const diff = Math.abs(i - index);
      gsap.to(item, {
        scale: diff === 0 ? 1.2 : 0.8,
        opacity: diff === 0 ? 1 : diff === 1 ? 0.5 : 0,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  }, [index]);

  // Animate submenu items on index change
  useEffect(() => {
    gsap.fromTo(
      ".submenu-item",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" }
    );
  }, [index]);

  // Initial scroll to index 0 on mount
  useEffect(() => {
    requestAnimationFrame(() => scrollToIndex(0));
  }, []);

  return (
    <div
      className="main-nav-screen"
      ref={containerRef}
      style={{ display: "none" }}
    >
      <div className="nav-screen-content">
        <div className="roller-mask" ref={rollerMaskRef}>
          <div className="roller" ref={rollerRef}>
            {menuData.map((item, i) => (
              <div
                key={i}
                className={`roller-item ${i === index ? "active" : ""}`}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>

        <div className="submenu">
          {menuData[index].links.map((link, i) => (
            <div key={i} className="submenu-item">
              {link}
            </div>
          ))}
        </div>

        <div className="social-media">
          <i className="ri-twitter-x-fill social-icon" aria-label="Twitter" />
          <i className="ri-instagram-line social-icon" aria-label="Instagram" />
          <i
            className="ri-linkedin-box-fill social-icon"
            aria-label="LinkedIn"
          />
          <i className="ri-github-fill social-icon" aria-label="GitHub" />
        </div>
      </div>
    </div>
  );
};

export default NavScreen;
