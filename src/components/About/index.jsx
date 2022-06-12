import React from "react";
const About = () => {
  return (
    <React.Fragment>
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
              <h3 className="column-title">Welcome to Gansai Tiles</h3>
              <p>
                With a vision and intention to add glamour and charm to your
                world through our extensive range of tiles, we at Gansai Tiles
                International add value to your life. We deliver excellent
                quality of Digital Wall Tiles ,Ceramic Floor Tiles, Porcelain /
                GVT Tiles all across the world to bring luxury and beauty in the
                world if tiles. Being the largest tiles manufacturer and
                exporter at Gansai Tiles International we have the
                responsibility of maintaining the standards and delivering the
                top notch designs to suit your taste. With a team of creative
                designers and technicians we use the innovations and technology
                blended with designs that are creative, trendy and affordable.
                Having a reputation of being the established brand in Indian as
                well as International market we are the leading manufacturer and
                supplier of high quality high performing tiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="our-team">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title wow fadeInDown">Quality and safety</h2>
          </div>

          <div className="card">
            <div className="card-body">
              <p>
                Our tiles and the production processes used to create them meet
                the optional and mandatory health, environmental, and safety
                standards to which the international community must adhere.
              </p>
              <ul className="list-group">
                <li className="list-group-item">
                  Ceramic, which naturally includes porcelain, is a safe,
                  natural material suitable for spaces of all kinds.
                </li>
                <li className="list-group-item">
                  It does not emit any harmful substances
                </li>
                <li className="list-group-item">
                  It is sustainable, incombustible
                </li>
                <li className="list-group-item">
                  Recyclable and resistant, easy to lay and long-lasting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
