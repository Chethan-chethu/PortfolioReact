import GlareHover from "./GlareHover";

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
              <td>Ph No</td>
              <td>8310450168</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>chethanramesh16@gmail.com</td>
            </tr>
            <tr>
              <td>Website</td>
              <td>Link</td>
            </tr>
          </tbody>
        </table>
      </GlareHover>
    </div>
  );
};

export default GlareHoverWrap;
