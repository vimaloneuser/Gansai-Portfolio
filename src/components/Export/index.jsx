import React from "react";
import { exports } from "../../common/constants";
const Export = () => {
  return (
    <>
      <section id="hero-action-section" className="hero-action-section">
        <div className="container ow-section">
          <h4 className="hero-action-title">
            Work with Best Tiles
            <br />
            Exporter
          </h4>
          <p>
            <a href="#" className="get-started">
              Get It Now!!
            </a>
          </p>
        </div>
      </section>

      <section id="our-team">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title wow fadeInDown">Export</h2>
            <p className="wow fadeInDown">We export in these countries.</p>
          </div>

          <div className="row text-center">
            {exports.map((i, key) => (
              <div key={key} className=" col-lg-2 col-md-2 col-sm-2 col-xs-4">
                <div
                  className="team-member wow fadeInUp"
                  data-wow-duration="400ms"
                  data-wow-delay="0ms"
                >
                  <div className="team-img">
                    <img className="img-responsive" src={i.flag} alt="" />
                  </div>
                  <div className="team-info">
                    <h3>{i.country}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Export;
