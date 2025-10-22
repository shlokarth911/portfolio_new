import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const ListItems = [
    { title: "Instagram", link: "https://www.instagram.com/shlokarth911/" },
    { title: "X", link: "https://www.x.com/shlokarth911/" },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/shlok-arth-08494a2b9/",
    },
    { title: "WhatsApp", link: "https://wa.me/+919939135022" },
    {
      title: "Instagram(2)",
      link: "https://www.instagram.com/7_pixels.design/",
    },
    { title: "Contact us", link: "mailto:shlokarth911@gmail.com" },
  ];

  return (
    <footer className="w-full font-display relative overflow-hidden flex items-center justify-end flex-col bg-black/50 backdrop-blur-sm">
      {/* large faded text behind with stronger blur effect */}
      <div className="w-full relative" style={{ height: "200px" }}>
        <h1
          className="w-full absolute bottom-0 transform translate-y-[50%] font-extralight tracking-widest text-[#979797] text-center
                     text-[20vw] sm:text-[15vw] md:text-[12vw]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)",
          }}
          aria-hidden
        >
          SHLOK
        </h1>
      </div>

      {/* main contents */}
      <div
        className="w-full z-40 py-4 sm:py-6 flex flex-col md:flex-row items-start
                   border-t border-t-[#333]
                   bg-neutral-900/50 backdrop-blur-xl px-4 sm:px-6 md:px-8"
      >
        {/* part1 — links */}
        <div className="p-2 w-full md:w-[56%] mb-6 md:mb-0">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-4">
            Links <i className="ri-arrow-right-up-line" />
          </h2>

          <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {ListItems.map((item, index) => (
              <li
                key={index}
                className="text-base sm:text-lg list-none relative"
              >
                <Link
                  to={item.link || "#"}
                  className="relative inline-block text-[#dddddd] no-underline transition-colors duration-300 group"
                >
                  <span className="inline-block">{item.title}</span>

                  {/* underline animation */}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-[#dddddd]" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* part2 — address / phone / email */}
        <div className="p-2 w-full md:w-[44%] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <h2 className="text-base sm:text-lg md:text-xl font-medium mb-3">
              Address
            </h2>
            <p className="pl-3 border-l-2 border-l-[#333] text-sm sm:text-base md:text-lg text-[#dddddd]">
              Ranchi, Jharkhand, India
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg md:text-xl font-medium mb-3">
              Phone
            </h2>
            <p className="pl-3 border-l-2 border-l-[#333] text-base sm:text-lg md:text-xl text-[#dddddd]">
              +91 6207832347
            </p>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <h2 className="text-base sm:text-lg md:text-xl font-medium mb-3">
              E-mail
            </h2>
            <p className="pl-3 border-l-2 border-l-[#555] text-sm sm:text-base md:text-lg text-[#dddddd] break-all">
              shlokarth7@gmail.com
            </p>
          </div>

          {/* empty placeholder for desktop grid */}
          <div className="hidden md:block" />
        </div>
      </div>

      {/* footer message */}
      <div className="w-full py-3 sm:py-4 flex flex-col items-center justify-center text-center text-[#858585] bg-[rgba(17,17,17,0.5)]">
        <a className="no-underline text-[#ddd] text-sm sm:text-base md:text-lg">
          Made with ❤️
        </a>
      </div>
    </footer>
  );
};

export default Footer;
