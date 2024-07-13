import React, { useState } from "react";
import "./Slider.css";
function Slider({ images }) {
  const [imageindex, setImageindex] = useState(null);

  const moveimages = (direction) => {
    if (direction === "left") {
      if (imageindex === 0) {
        setImageindex(images.length - 1);
      } else {
        setImageindex(imageindex - 1);
      }
    } else {
      if (imageindex === images.length - 1) {
        setImageindex(0);
      } else {
        setImageindex(imageindex + 1);
      }
    }
  };

  return (
    <div className="slider">
      {imageindex !==null  && (
        <div className="fullscreen">
          <div className="arrow leftarrow" onClick={()=>moveimages("left")}>
            <img src="./arrow.png" alt="" />
          </div>

          <div className="imagecontainer">
            <img src={images[imageindex]} alt="" />
          </div>

          <div className="arrow" onClick={()=>moveimages("right")}>
            <img src="./arrow.png" alt="" />
          </div>

          <div className="cross" onClick={() => setImageindex(null)}>
            <p>X</p>
          </div>
        </div>
      )}

      <div className="big" onClick={() => setImageindex(0)}>
        <img src={images[0]} alt="" />
      </div>

      <div className="small">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => setImageindex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
