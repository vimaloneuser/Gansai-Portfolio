import React from "react";
const WhatWeDid = () => {
  return (
    <section id="business-stats">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title wow fadeInDown">
          What we did till now.
        </h2>
      </div>

      <div className="row text-center">
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div
            className="wow fadeInUp"
            data-wow-duration="400ms"
            data-wow-delay="0ms"
          >
            <div
              className="business-stats"
              data-digit="5"
              data-duration="1000"
            ></div>
            <strong>Year experience</strong>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div
            className="wow fadeInUp"
            data-wow-duration="400ms"
            data-wow-delay="100ms"
          >
            <div
              className="business-stats"
              data-digit="20"
              data-duration="1000"
            ></div>
            <strong>Countries</strong>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div
            className="wow fadeInUp"
            data-wow-duration="400ms"
            data-wow-delay="200ms"
          >
            <div
              className="business-stats"
              data-digit="100"
              data-duration="1000"
            ></div>
            <strong>Happy Clients</strong>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div
            className="wow fadeInUp"
            data-wow-duration="400ms"
            data-wow-delay="300ms"
          >
            <div
              className="business-stats"
              data-digit="1000"
              data-duration="1000"
            ></div>
            <strong>Design</strong>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default WhatWeDid;
