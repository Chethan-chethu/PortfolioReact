import logo from "./logo.svg";
import "./App.css";
import ImageTrailWrap from "./ReactBitJSComponents/ImageTrailComponents/ImageTrailWrap";
import MagicBentoWrap from "./ReactBitJSComponents/MagicBentoComponents/MagicBentoWrap";
import DecryptedTextWrap from "./ReactBitJSComponents/DecryptedTextComponents/DecryptedTextWrap";
import SkillGridWrap from "./CustomComponents/SkillCardComponents/SkillGridWrap";
import TimelineWrap from "./CustomComponents/TimelineComponents/TimelineWrap";
import { StaggeredMenuWrap } from "./ReactBitJSComponents/StaggeredMenuComponents/StaggeredMenuWrap";

function App() {
  return (
    <>
      <StaggeredMenuWrap />
      <ImageTrailWrap />
      <MagicBentoWrap />
      {/* <DecryptedTextWrap /> */}
      {/* <SkillGridWrap />
      <TimelineWrap /> */}
      {/* <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Tailwind is working 🚀
      </div> */}
    </>
  );
}

export default App;
