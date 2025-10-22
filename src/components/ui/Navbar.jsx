import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const container = useRef(null);

  // --- Data for navigation and social links ---
  const navData = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
    { title: "Work", link: "/work" },
  ];
  const socialLinks = [
    { title: "GitHub", link: "https://github.com/shlokarth911" },
    { title: "LinkedIn", link: "https://www.linkedin.com/in/shlokarth911/" }, // Fixed typo
    { title: "Instagram", link: "https://www.instagram.com/shlokarth911/" },
    { title: "Twitter/X", link: "https://www.x.com/shlokarth911/" },
    { title: "WhatsApp", link: "https://wa.me/+919939135022" }, // Fixed typo
  ];

  // --- GSAP Animation ---
  useGSAP(
    () => {
      if (isNavOpen) {
        // --- OPEN ANIMATION ---
        // 1. Animate container morph
        gsap.to(container.current, {
          width: "90vw", // Responsive width
          maxWidth: "450px", // Max width for the island
          height: "auto", // Fit content
          // Become a "racetrack"
          top: 10,
          ease: "elastic.out(1, 0.8)", // Springy
          duration: 1.5,
        });

        // 2. Animate content wrapper (fades in)
        gsap.to(".nav-content", {
          opacity: 1,
          pointerEvents: "auto",
          delay: 0.2, // Start after container starts opening
          ease: "power2.inOut",
        });

        // 3. Animate links (stagger in)
        gsap.fromTo(
          ".nav-item, .social-item",
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            delay: 0.35, // Start after content wrapper
            ease: "power2.out",
          }
        );
      } else {
        // --- CLOSE ANIMATION ---
        // 1. Animate links (stagger out) - very fast
        gsap.to(".nav-item, .social-item", {
          y: 10,
          opacity: 0,
          stagger: 0.03,
          ease: "power2.in",
          duration: 0.2,
        });

        // 2. Animate content wrapper (fades out)
        gsap.to(".nav-content", {
          opacity: 0,
          pointerEvents: "none",
          delay: 0.1,
          ease: "power2.inOut",
          duration: 0.2,
        });

        // 3. Animate container morph back to pill
        gsap.to(container.current, {
          width: "120px", // Back to initial pill width
          maxWidth: "120px",
          height: "72px", // Back to initial pill height

          top: 24, // Back to initial position (top-6)
          ease: "expo.out", // Fast and smooth
          duration: 1,
          delay: 0.15, // Start after content is mostly hidden
        });
      }
    },
    { scope: container, dependencies: [isNavOpen] }
  );

  return (
    <div
      ref={container}
      className="
      min-w-[200px]
        fixed z-50 font-display border border-neutral-500/50 top-6 left-1/2 transform -translate-x-1/2
        bg-neutral-800/20  p-4 rounded-4xl /* Initial state: pill */
        overflow-hidden backdrop-blur-xl shadow-lg
        w-[120px] h-[72px] /* Initial state: dimensions */
        text-neutral-100 /* Light text on dark island */
      "
      style={{
        boxSizing: "border-box",
      }}
    >
      {/* 1. HEADER (Always visible) */}
      <div className="nav-header flex items-center px-2 justify-between h-[40px]">
        <h1 className="text-base sm:text-lg my-2">Menu</h1>
        <div
          className="cursor-pointer"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? <X size={22} /> : <Menu size={22} />}
        </div>
      </div>

      {/* 2. CONTENT (Animated) */}
      <div className="nav-content opacity-0 pointer-events-none pt-4">
        {/* Nav Links */}
        <div className="flex items-center justify-evenly w-full p-3">
          {navData.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="nav-item text-[16px] sm:text-[18px] list-none relative"
              onClick={() => setIsNavOpen(false)} // Close menu on click
            >
              <span className="relative inline-block text-xl text-[#dddddd] no-underline transition-colors duration-300 group">
                <span className="inline-block">{item.title}</span>
                <span
                  className="absolute left-0 bottom-0 h-[2px] w-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "#dddddd" }}
                />
              </span>
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-evenly w-full p-3 border-t border-[#555]">
          {socialLinks.map((item, index) => (
            // FIXED: Use <a> for external links
            <a
              key={index}
              href={item.link} // FIXED: Use href for <a>
              target="_blank"
              rel="noopener noreferrer"
              className="social-item text-[14px] sm:text-[18px] list-none relative"
            >
              <span className="relative inline-block text-sm text-[#dddddd] no-underline transition-colors duration-300 group">
                <span className="inline-block">{item.title}</span>
                <span
                  className="absolute left-0 bottom-0 h-[2px] w-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "#dddddd" }}
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
