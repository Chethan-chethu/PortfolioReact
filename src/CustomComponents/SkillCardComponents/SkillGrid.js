import SkillCard from "./SkillCard";
import "./SkillGrid.css";

const SkillGrid = ({ skills }) => {
  return (
    <section className="skills-wrapper">
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={index} image={skill.image} label={skill.label} />
        ))}
      </div>
    </section>
  );
};

export default SkillGrid;
