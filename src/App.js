import logo from "./logo.svg";
import "./App.css";
import ImageTrailWrap from "./ReactBitJSComponents/ImageTrailComponents/ImageTrailWrap";
import MagicBentoWrap from "./ReactBitJSComponents/MagicBentoComponents/MagicBentoWrap";
import StepperWrap from "./ReactBitJSComponents/StepperComponents/StepperWrap";
import ScrollStackWrap from "./ReactBitJSComponents/ScrollStackComponents/ScrollStackWrap";

function App() {
  return (
    <>
      <ImageTrailWrap />
      <MagicBentoWrap />
      {/* <ScrollStackWrap className="myTestDiv" /> */}
    </>
  );
}

export default App;
