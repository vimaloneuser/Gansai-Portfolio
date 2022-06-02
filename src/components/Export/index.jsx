import React from "react";
import { exports } from "../../common/constants";
const Export = () => {
  return (
    <>
     

      <section id="our-team">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title wow fadeInDown">Export</h2>
            <p className="wow fadeInDown">We export in these countries.</p>
          </div>

          <div className="row text-center">
            {exports.map((i, key) => (
              <div key={key} className=" col-lg-2 col-md-2 col-sm-2 col-xs-3">
                <div
                  className="team-member wow fadeInUp"
                  data-wow-duration="400ms"
                  data-wow-delay="0ms"
                >
                  <div className="team-img">
                    <img className="img-responsive" src={i.flag} alt="" />
                  </div>
                  <div className="team-info">
                    <h5>{i.country}</h5>
                  </div>
                </div>
              </div>
            ))}
            <div className=" col-lg-2 col-md-2 col-sm-2 col-xs-3">
              <div
                className="team-member wow fadeInUp"
                data-wow-duration="400ms"
                data-wow-delay="0ms"
              >
                <div className="team-img">
                  <img className="img-responsive" src="assets/images/flags/more.png" alt="" />
                </div>
                <div className="team-info">
                  <h5>& More.</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Export;
