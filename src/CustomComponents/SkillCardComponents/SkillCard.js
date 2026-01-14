import React from "react";
import "./SkillCard.css";

const SkillCard = ({ image, label }) => {
  return (
    <div className="skill-card">
      <img src={image} alt={label} className="skill-icon" />
      <span className="skill-label">{label}</span>
    </div>
  );
};

export default SkillCard;
