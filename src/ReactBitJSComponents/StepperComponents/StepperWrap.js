import Stepper, { Step } from "./Stepper";
import { useState } from "react";

const StepperWrap = () => {
  const { name, setName } = useState("");

  return (
    <Stepper name="chethan" step={2}>
      <Step>
        <p>Custom step content!</p>
      </Step>
      <Step>
        <h2>How about an input?</h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name?"
        />
      </Step>
      <Step>
        <h2>Final Step</h2>

        <p>You made it!</p>
        <p>You made it!</p>
        <p>You made it!</p>
        <p>You made it!</p>
        <p>You made it!</p>
        <p>You made it!</p>
      </Step>
    </Stepper>
  );
};

export default StepperWrap;
