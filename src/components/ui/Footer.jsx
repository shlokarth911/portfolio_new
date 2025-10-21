import React from "react";

const Footer = () => {
  const ListItems = [
    { title: "Instagram", link: "https://www.instagram.com/shlokarth911/" },
    { title: "X", link: "https://www.x.com/shlokarth911/" },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/shlok-arth-08494a2b9/",
    },
    { title: "WathsApp", link: "https://wa.me/+919939135022" },
    {
      title: "Instagram(2)",
      link: "https://www.instagram.com/7_pixels.design/",
    },
    { title: "Contact us", link: "mailto:shlokarth911@gmail.com" },
    { title: "Website Policy", link: "" },
  ];

  return (
    <footer className="w-full font-display relative overflow-hidden flex items-center justify-end flex-col">
      {/* large faded text behind */}
      <h1
        className="w-full  transform translate-y-[40%] font-extralight font-display tracking-widest text-[12vw] text-[#979797] text-center  
                   md:text-[12vw] sm:text-[15vw]"
        aria-hidden
      >
        SHLOK
      </h1>

      {/* main contents */}
      <div
        className="w-full z-40 py-2 flex flex-col md:flex-row items-center
                   border-t border-t-[#333]
                   bg-[rgba(17,17,17,0.5)] backdrop-blur-lg px-4"
        style={{ height: "auto" }}
      >
        {/* part1 — links */}
        <div className="p-1 w-full md:w-[56%]">
          <h2 className="text-[4.5vw] font-medium">
            Links <i className="ri-arrow-right-up-line" />
          </h2>

          <ul className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-4">
            {ListItems.map((item, index) => (
              <li key={index} className="text-[18px] list-none relative">
                <a
                  href="#"
                  className="relative inline-block text-[#dddddd] no-underline transition-colors duration-300 group"
                >
                  <span className="inline-block">{item.title}</span>

                  {/* underline animation (replaces pseudo-element) */}
                  <span
                    className="absolute left-0 bottom-0 h-[2px] w-0 group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: "#dddddd" }}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* part2 — address / phone / email */}
        <div className="p-1 w-full md:w-[44%] grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="mt-3">
            <h2 className="text-[2.1vw] font-medium">Address</h2>
            <p
              className="pt-3 pl-3 border-l border-l-[#333] text-[18px] w-[80%] text-[#dddddd]"
              style={{ paddingTop: "12px" }}
            >
              Ranchi , Jharkhand, India
            </p>
          </div>

          <div className="mt-3">
            <h2 className="text-[2.1vw] font-medium">Phone</h2>
            <p
              className="pt-3 pl-3 border-l border-l-[#333] text-[22px] text-[#dddddd]"
              style={{ paddingTop: "12px" }}
            >
              +91 6207832347
            </p>
          </div>

          <div className="mt-3">
            <h2 className="text-[2.1vw] font-medium">E-mail</h2>
            <p
              className="pt-3 pl-3 border-l border-l-[#555] text-[22px] text-[#dddddd]"
              style={{ paddingTop: "12px" }}
            >
              shlokarth7@gmail.com
            </p>
          </div>

          {/* empty placeholder to preserve 2-column grid layout on desktop */}
          <div />
        </div>
      </div>

      {/* declamatory (kept for parity with your CSS) */}
      <div className="py-2 flex flex-col items-center justify-center text-center text-[#858585]">
        <a className="no-underline text-[#ddd] text-[18px]">Made with ❤️</a>
      </div>
    </footer>
  );
};

export default Footer;
