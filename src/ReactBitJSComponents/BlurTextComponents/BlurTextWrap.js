import BlurText from "./BlurText";

import "./BlurText.css";

const BlurTextWrap = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <BlurText
      text="Chethan R"
      delay={250}
      animateBy="words"
      direction="top"
      onAnimationComplete={handleAnimationComplete}
      className="text-2xl mb-8 BlrTxt-Div1 BlrTxt-Fnt1"
    />
  );
};

export default BlurTextWrap;
