import React from "react";
const Gallery = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title wow fadeInDown">Our designs</h2>
          <p className="wow fadeInDown">
            You can see some of our best dsigns.
          </p>
        </div>

        <div className="portfolio-items">
          <div className="portfolio-item designing">
            <div className="portfolio-item-inner">
              <img
              height={300}
              width={300}
                className="img-responsive"
                src="assets/images/portfolio/01.jpg"
                alt=""
              />
              <div className="portfolio-info">
                <a
                  className="preview"
                  href="assets/images/portfolio/01.jpg"
                  rel="prettyPhoto"
                >
                  <i className="fa fa-eye"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="portfolio-item mobile development">
            <div className="portfolio-item-inner">
              <img
               height={300}
               width={300}
                className="img-responsive"
                src="assets/images/portfolio/02.jpg"
                alt=""
              />
              <div className="portfolio-info">
                <a
                  className="preview"
                  href="assets/images/portfolio/02.jpg"
                  rel="prettyPhoto"
                >
                  <i className="fa fa-eye"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="portfolio-item designing">
            <div className="portfolio-item-inner">
              <img
                className="img-responsive"
                src="assets/images/portfolio/03.jpg"
                alt=""
              />
              <div className="portfolio-info">
                <a
                  className="preview"
                  href="assets/images/portfolio/03.jpg"
                  rel="prettyPhoto"
                >
                  <i className="fa fa-eye"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="portfolio-item mobile">
            <div className="portfolio-item-inner">
              <img
                className="img-responsive"
                src="assets/images/portfolio/04.jpg"
                alt=""
              />
              <div className="portfolio-info">
                <a
                  className="preview"
                  href="assets/images/portfolio/04.jpg"
                  rel="prettyPhoto"
                >
                  <i className="fa fa-eye"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="portfolio-item designing development">
            <div className="portfolio-item-inner">
              <img
                className="img-responsive"
                src="assets/images/portfolio/05.jpg"
                alt=""
              />
              <div className="portfolio-info">
                <a
                  className="preview"
                  href="assets/images/portfolio/05.jpg"
                  rel="prettyPhoto"
                >
                  <i className="fa fa-eye"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="portfolio-item mobile">
            <div className="portfolio-item-inner">
              <img
                className="img-responsive"
                src="assets/images/portfolio/06.jpg"
                alt=""
              />
              <div className="portfolio-info">
                <a
                  className="preview"
                  href="assets/images/portfolio/06.jpg"
                  rel="prettyPhoto"
                >
                  <i className="fa fa-eye"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="portfolio-item designing development">
            <div className="portfolio-item-inner">
              <img
                className="img-responsive"
                src="assets/images/portfolio/07.jpg"
                alt=""
              />
              <div className="portfolio-info">
                <a
                  className="preview"
                  href="assets/images/portfolio/07.jpg"
                  rel="prettyPhoto"
                >
                  <i className="fa fa-eye"></i>
                </a>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Gallery;
