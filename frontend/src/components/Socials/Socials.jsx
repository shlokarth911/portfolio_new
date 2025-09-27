import React from "react";
import "./Socials.css";

const Socials = () => {
  const socialsData = [
    {
      title: "Instagram",
      description: "Username: shlokarth911",
      link: "https://www.instagram.com/shlokarth911/",
    },

    {
      title: "LinkedIn",
      description: "Username: shlokarth911",
      link: "https://www.linkedin.com/in/shlokarth911/",
    },

    {
      title: "WhatsApp",
      description: "Number: +91 993 913 5022",
      link: "https://wa.me/919939135022",
    },

    {
      title: "GitHub",
      description: "Username: shlokarth911 ",
      link: "https://github.com/shlokarth911",
    },

    {
      title: "LeetCode",
      description: "Username: shlokarth911",
      link: "https://leetcode.com/shlokarth911/",
    },
    {
      title: "Email",
      description: "emial : shlokarth7@gmail.com",
      link: "mailto:shlokarth7@gmail.com",
    },
    {
      title: "X",
      description: "Username: shlokarth911",
      link: "https://twitter.com/shlokarth911",
    },
    {
      title: "Instagram(2)",
      description: " Username: 7_pixels.design (for my web design content)",
      link: "https://www.instagram.com/7_pixels.design/",
    },

    {
      title: "Email (2)",
      description: "email : shlokarth911@gmail.com",
      link: "mailto:shlokarth911@gmail.com",
    },
  ];

  return (
    <div className="main-container">
      <h1 className="header">Socials</h1>

      <div className="socials">
        {socialsData.map((item, idx) => {
          return (
            <div
              className="social"
              style={{
                cursor: "pointer",
              }}
              onClick={() => window.open(item.link, "_blank")}
              key={idx}
            >
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Socials;
