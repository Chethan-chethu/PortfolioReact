import TextType from "./TextType";

import "./TextTypeWrap.css";

const TextTypeWrap = () => {
  return (
    <TextType
      text={["Full Stack Developer", "Software Engineer"]}
      typingSpeed={75}
      pauseDuration={1500}
      showCursor={true}
      cursorCharacter="|"
      className="TtWrp-Div1"
    />
  );
};

export default TextTypeWrap;
