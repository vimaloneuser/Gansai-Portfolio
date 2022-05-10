import React from "react";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            &copy; 2022 Gansai Tiles.{" "}         
          </div>
          <div className="col-sm-6">
            <ul className="social-icons">
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
