import SkillGrid from "./SkillGrid";

import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import java from "../../assets/images/java.png";
import js from "../../assets/images/js.png";
import node from "../../assets/images/node.png";
import react from "../../assets/images/react.png";

const skills = [
  { image: html, label: "HTML" },
  { image: css, label: "CSS" },
  { image: java, label: "JAVA" },
  { image: js, label: "JS" },
  { image: node, label: "NODE" },
  { image: react, label: "REACT" },
  { image: html, label: "HTML" },
  { image: css, label: "CSS" },
  { image: java, label: "JAVA" },
  { image: js, label: "JS" },
  { image: node, label: "NODE" },
  { image: react, label: "REACT" },
  { image: html, label: "HTML" },
  { image: css, label: "CSS" },
  { image: java, label: "JAVA" },
  { image: js, label: "JS" },
  { image: node, label: "NODE" },
  { image: react, label: "REACT" },
  { image: html, label: "HTML" },
  { image: css, label: "CSS" },
  { image: java, label: "JAVA" },
  { image: js, label: "JS" },
  { image: node, label: "NODE" },
  { image: react, label: "REACT" },
];

function SkillGridWrap() {
  return <SkillGrid skills={skills} />;
}

export default SkillGridWrap;
