import React from "react";
import "./UpdateCard.css";

const UpdateCard = ({ title, description, style = {} }) => {
  return (
    <div className="update-card-container" style={style}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default UpdateCard;
