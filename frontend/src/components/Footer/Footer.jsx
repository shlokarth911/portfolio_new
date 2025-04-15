import React from "react";
import "./Footer.css";

const Footer = () => {
  const ListItems = [
    {
      title: "RTI",
    },
    {
      title: "Feedback",
    },
    {
      title: "Contact us",
    },
    {
      title: "Website Policy",
    },
    {
      title: "Copyright Policy",
    },
    {
      title: "Privacy Policy",
    },
    {
      title: "Hyper Linking Policy",
    },
    {
      title: "Terms of Use",
    },
    {
      title: "Archives",
    },
    {
      title: "Web Information Manager",
    },
    {
      title: "Space Policy",
    },
    {
      title: "Parliament Questions",
    },
    {
      title: "PIB e-Saral Hindi Vakyakosh",
    },
    {
      title: "Related links",
    },
    {
      title: "Map",
    },
    {
      title: "Help",
    },
  ];

  return (
    <footer className="footer">
      <h1 className="footer-text-large">ISRO</h1>

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
            <p>
              ISRO Headquarters, Antariksh Bhavan, New BEL Road Bengaluru-560
              094
            </p>
          </div>

          <div className="phone">
            <h2>Phone</h2>
            <p> +91 80 22172294 / 96</p>
          </div>
          <div className="email">
            <h2>E-mail</h2>
            <p>isropr@isro.gov.in</p>
          </div>
        </div>
      </div>

      <div className="declamatory">
        <p>**This is a dummy website developed for showcasing purposes**</p>
        <p>
          Developer :{" "}
          <a href="https://shlokarth911.github.io/portfolio/">Shlok Arth</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
