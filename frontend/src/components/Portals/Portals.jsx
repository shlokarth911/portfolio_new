import React from "react";
import "./Portals.css";

const Portals = () => {
  const PortalsData = [
    {
      title: "I-GRSAP",
      description: "ISRO's Grant In Aid Space Research Programmes",
    },

    {
      title: "ISRO STEM",
      description:
        "ISRO Science Technology Engineering & Mathematics Programme",
    },

    {
      title: "SPARK",
      description: "ISRO Virtual Space Museum",
    },

    {
      title: "MOSDAC",
      description:
        "Meteorological & Oceanographic Satellite Data Archival Centre",
    },

    {
      title: "ISSDC",
      description: "Indian Space Science Data Centre",
    },
    {
      title: "Bhoonidhi",
      description: " Earth Observation Data Hub",
    },
    { title: "Bhuvan", description: "Indian Geodetic Network" },
    {
      title: "VEDAS",
      description:
        " Visualisation of Earth Observation Data and Archival System",
    },

    {
      title: "NDEM",
      description: "National Database for Emergency Management",
    },
  ];

  return (
    <div className="main-container">
      <h1 className="header">Portals</h1>

      <div className="portals">
        {PortalsData.map((item, idx) => {
          return (
            <div className="portal" key={idx}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portals;
