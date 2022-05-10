import React from "react";
const Banner = () => {
  return (
    <section className="demo-2">
    <div id="slider" className="sl-slider-wrapper">
      <div className="sl-slider">
        <div
          className="sl-slide"
          data-orientation="horizontal"
          data-slice1-rotation="-25"
          data-slice2-rotation="-25"
          data-slice1-scale="2"
          data-slice2-scale="2"
        >
          <div className="sl-slide-inner">
            <div className="bg-img bg-img-1"></div>
          </div>
        </div>

        <div
          className="sl-slide"
          data-orientation="vertical"
          data-slice1-rotation="10"
          data-slice2-rotation="-15"
          data-slice1-scale="1.5"
          data-slice2-scale="1.5"
        >
          <div className="sl-slide-inner">
            <div className="bg-img bg-img-2"></div>
          </div>
        </div>

        <div
          className="sl-slide"
          data-orientation="horizontal"
          data-slice1-rotation="3"
          data-slice2-rotation="3"
          data-slice1-scale="2"
          data-slice2-scale="1"
        >
          <div className="sl-slide-inner">
            <div className="bg-img bg-img-3"></div>
          </div>
        </div>
      </div>

      <nav id="nav-dots" className="nav-dots">
        <span className="nav-dot-current"></span>
        <span></span>
        <span></span>
      </nav>
    </div>
  </section>
  );
};

export default Banner;
