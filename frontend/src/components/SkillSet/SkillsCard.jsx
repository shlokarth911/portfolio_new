import React from "react";
import "./SkillsCard.css";

const SkillsCard = ({ title, description, style = {} }) => {
  return (
    <div className="skills-card-container" style={style}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default SkillsCard;
