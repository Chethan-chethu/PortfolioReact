import DecryptedText from "./DecryptedText";

const DecryptedTextWrap = ({ displayText = "chethan" }) => {
  return (
    <DecryptedText
      text={displayText}
      speed={150}
      maxIterations={36}
      animateOn="both"
      className="revealed"
    />
  );
};

export default DecryptedTextWrap;
