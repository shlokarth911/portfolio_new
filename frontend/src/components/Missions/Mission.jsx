import React from "react";
import "./Mission.css";
import MisssionCard from "./MissonCard";

const Mission = () => {
  const MissionsData = [
    {
      title: "Chandrayaan Missions",
      desc: "Exploring the Moon's Mysteries India's first step into lunar exploration began with Chandrayaan-1, discovering water molecules on the Moon. Chandrayaan-2 advanced our understanding, and Chandrayaan-3 successfully achieved a soft landing on the Moon’s south pole — a global first.",
      li: [
        " Chandrayaan-1 (2008",
        "Chandrayaan - 2(2019)",
        " Chandrayaan-3 (2023)",
      ],
      img: "https://physicsworld.com/wp-content/uploads/2019/07/psk2826-small.jpg",
    },

    {
      title: "Mangalyaan (Mars Orbiter Mission)",
      desc: "ndia’s Journey to the Red Planet Launched in 2013, Mangalyaan made India the first Asian nation to reach Martian orbit — and the first in the world to do so in its maiden attempt. It remains a testament to ISRO's ingenuity and cost-effectiveness.",
      li: [
        "Launched: November 5, 2013",
        "Mars Orbit Insertion: September 24, 2014",
      ],
      img: "https://education.sakshi.com/sites/default/files/images/2022/10/04/mangalyaan-1664887487.jpg",
    },

    {
      title: "Gaganyaan Mission (Upcoming)",
      desc: "India’s First Human Spaceflight Program Set to launch Indian astronauts into space, the Gaganyaan mission will mark a historic leap in India's human spaceflight capabilities.",
      li: [
        " Crewed mission planned for 2025",
        " Uncrewed test flights in progress",
      ],
      img: "https://assets.shortpedia.com/uploads/2021/07/17/1626522220.jpg",
    },

    {
      title: "Aditya-L1",
      desc: "ndia’s First Solar Mission Currently on its journey to the Sun-Earth Lagrange Point (L1), Aditya-L1 will study the Sun’s corona, solar wind, and space weather phenomena.",
      li: ["Launched: September 2, 2023", " In L1 Halo Orbit: 2024"],
      img: "https://bsmedia.business-standard.com/_media/bs/img/article/2023-08/28/full/1693221199-2719.jpg",
    },

    {
      title: "PSLV & Launch Vehicles",
      desc: "The Workhorse of Indian Space Missions The Polar Satellite Launch Vehicle (PSLV) has carried over 300 satellites into orbit — including international payloads — establishing ISRO as a global launch provider.",
      li: [" First flight: 1993", "Over 50 successful missions"],
      img: "https://th.bing.com/th/id/OIP.sFV1FNVq1TzrBNQhXLuzZgHaE7?rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <div className="missions-container">
      <div className="mission-card-container">
        {MissionsData.map((mission, index) => (
          <MisssionCard
            key={index}
            title={mission.title}
            desc={mission.desc}
            item={mission.li}
            img={mission.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Mission;
