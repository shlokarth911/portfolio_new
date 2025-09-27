import React from "react";
import "./Footer.css";

const Footer = () => {
  const ListItems = [
    {
      title: "Instagram",
      link: "https://www.instagram.com/shlokarth911/",
    },
    {
      title: "X",
      link: "https://www.x.com/shlokarth911/",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/shlok-arth-08494a2b9/",
    },
    {
      title: "WathsApp",
      link: "https://wa.me/+919939135022",
    },
    {
      title: "Instagram(2)",
      link: "https://www.instagram.com/7_pixels.design/",
    },
    {
      title: "Feedback",
      link: "",
    },
    {
      title: "Contact us",
      link: "mailto:shlokarth911@gmail.com",
    },
    {
      title: "Website Policy",
      link: "",
    },
  ];

  return (
    <footer className="footer">
      <h1 className="footer-text-large">SHLOK</h1>

      <div className="footer-contents">
        <div className="part1">
          <h2>
            Links <i class="ri-arrow-right-up-line"></i>
          </h2>

          <ul>
            {ListItems.map((item, index) => {
              return (
                <li key={index}>
                  <a href="#">{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="part2">
          <div className="address">
            <h2>Address</h2>
            <p>Ranchi , Jharkhand, India</p>
          </div>

          <div className="phone">
            <h2>Phone</h2>
            <p> +91 6207832347</p>
          </div>
          <div className="email">
            <h2>E-mail</h2>
            <p>shlokarth7@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
