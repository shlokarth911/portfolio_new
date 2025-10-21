import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navData = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "Work",
      link: "/work",
    },
  ];
  const socialLinks = [
    {
      title: "GitHub",
      link: "https://github.com/shlokarth911",
    },
    {
      title: "LinkedInd",
      link: "https://www.linkedin.com/in/shlokarth911/",
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/shlokarth911/",
    },
    {
      title: "Twitter/X",
      link: "https://www.x.com/shlokarth911/",
    },
    {
      title: "WathsApp",
      link: "https://wa.me/+919939135022",
    },
  ];

  const navRef = useRef(null);

  useGSAP(() => {
    if (isNavOpen) {
      gsap.to(navRef.current, {
        height: "auto",
        minWidth: "32vw",
        ease: "elastic.out(1.5,1)",
        top: 10,
        duration: 2.25,
      });
    } else {
      gsap.to(navRef.current, {
        minWidth: "10vw",
        ease: "expo.out",
        duration: 1.75,
      });
      gsap.to(navRef.current, {
        height: "72px",
        ease: "expo.out",
        top: 25,
        duration: 0.45,
      });
    }
  }, [isNavOpen]);

  return (
    <div
      ref={navRef}
      className="
        fixed z-90 font-display top-5 left-1/2 transform -translate-x-1/2
        bg-neutral-50/10 p-4 rounded-4xl overflow-hidden backdrop-blur-lg

        /* mobile-first: nearly full width so it fits small screens */
        w-[90vw] max-w-[800px]

        /* from small screens up (>= 640px) keep your original desktop min width */
        sm:min-w-[28vw] sm:w-auto
      "
      style={{
        boxSizing: "border-box",
      }}
    >
      <div className="flex items-center px-2 justify-between">
        <h1 className="text-base sm:text-lg my-2">Menu</h1>
        <div
          className="cursor-pointer"
          onClick={() => (isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true))}
        >
          {isNavOpen ? <X size={22} /> : <Menu size={22} />}
        </div>
      </div>

      <div className="flex items-center justify-evenly w-full p-3">
        {navData.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.link}
              className="text-[16px] sm:text-[18px] list-none relative"
            >
              <span className="relative inline-block text-xl text-[#dddddd] no-underline transition-colors duration-300 group">
                <span className="inline-block">{item.title}</span>

                <span
                  className="absolute left-0 bottom-0 h-[2px] w-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "#dddddd" }}
                />
              </span>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center justify-evenly w-full p-3 border-t border-[#888888]">
        {socialLinks.map((item, index) => {
          return (
            <Link
              key={index}
              className="text-[14px] sm:text-[18px] list-none relative"
            >
              <span className="relative inline-block text-sm text-[#dddddd] no-underline transition-colors duration-300 group">
                <span className="inline-block">{item.title}</span>

                <span
                  className="absolute left-0 bottom-0 h-[2px] w-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "#dddddd" }}
                />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
