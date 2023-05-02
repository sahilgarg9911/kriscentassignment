import React from "react";
import "../styles/slider.css";


const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner slide">
          <div className="carousel-item active">
            <img src="images/home.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item slide">
            <img src="images/dm.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item slide">
            <img src="images/web.png" className="d-block w-100" alt="..." />
          </div>

        </div>
      </div>
    </>
  );
};

export default Slider;
