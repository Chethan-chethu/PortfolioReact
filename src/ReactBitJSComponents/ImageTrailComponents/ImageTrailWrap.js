import ImageTrail from "./ImageTrail";
import imageList from "../../assets/images";

const ImageTrailWrap = () => {
  return (
    <div style={{ height: "500px", position: "relative", overflow: "hidden" }}>
      <ImageTrail
        // key={key}
        items={imageList}
        variant={1}
      />
    </div>
  );
};

export default ImageTrailWrap;
