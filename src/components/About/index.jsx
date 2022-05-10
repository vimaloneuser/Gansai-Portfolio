import React from "react";
const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title wow fadeInDown">About Us</h2>
          <p className="wow fadeInDown">
            We work for good service for our clients.
          </p>
        </div>

        <div className="row">
          <div className="col-sm-6 wow fadeInLeft">
            <img
              className="img-responsive"
              src="assets/images/about.jpg"
              alt=""
            />
          </div>

          <div className="col-sm-6 wow fadeInRight">
            <h3 className="column-title">Gansai Tiles</h3>
            <p>
              Gansai Tiles is one of the largest exporter of Ceramic Wall tiles
              and porcelain tiles in India. Our Manufacturing units are equipped
              with modern technology for zero chance for human error. These
              makes us different in the tiles industries. As we have highly
              innovative and aggressive development team so we are achieving
              target for quality and design for all countries in the world.
            </p>
            <p>
              Gansai Tiles is very prestigious brand of tiles industries. So we
              know the how to deliver Quality And Service and make Our Brand
              BIGGER & BETTER.
            </p>

    
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
