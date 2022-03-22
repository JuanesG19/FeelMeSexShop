import React from "react";

const Slideimage = () => {
  return (
    <div className="slider">
      <figure>
        <div className="img_container">
          <img src="static/images/sliderHomepage/banner1.jpg" alt="imgSlider"/>
        </div>
        <div className="img_container">
          <img src="static/images/sliderHomepage/banner2.jpg" alt="imgSlider" />
        </div>
        <div className="img_container">
          <img src="static/images/sliderHomepage/banner3.jpg" alt="imgSlider"/>
        </div>
        <div className="img_container">
          <img src="static/images/sliderHomepage/banner4.jpg" alt="imgSlider" />
        </div>
      </figure>
    </div>
  );
};

export default Slideimage;
