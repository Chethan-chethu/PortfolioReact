import GlareHover from "./GlareHover";

import DecryptedTextWrap from "../DecryptedTextComponents/DecryptedTextWrap";

const GlareHoverWrap = () => {
  return (
    <div style={{ height: "600px", position: "relative" }}>
      <GlareHover
        glareColor="#ffffff"
        glareOpacity={0.3}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={800}
        playOnce={false}
      >
        {/* <h2
          style={{
            fontSize: "1rem",
            fontWeight: "600",
            color: "#333",
            margin: 0,
          }}
        >
          8310450168
        </h2> */}
        <table className="GlHvr-Tab">
          <tbody>
            <tr>
              <td>
                <DecryptedTextWrap displayText="Ph No" />
              </td>
              <td>
                <DecryptedTextWrap displayText="8310450168" />
              </td>
            </tr>
            <tr>
              <td>
                <DecryptedTextWrap displayText="Email" />
              </td>
              <td>
                <DecryptedTextWrap displayText="chethanramesh16@gmail.com" />
              </td>
            </tr>
            <tr>
              <td>
                <DecryptedTextWrap displayText="Website" />
              </td>
              <td>
                <DecryptedTextWrap displayText="Link" />
              </td>
            </tr>
          </tbody>
        </table>
      </GlareHover>
    </div>
  );
};

export default GlareHoverWrap;
