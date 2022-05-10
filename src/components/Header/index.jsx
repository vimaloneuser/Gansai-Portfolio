import React from "react";
import { Link } from "react-router-dom";
// import { Link, useParams } from "react-router-dom";

const Header = () => {
  // const params = useParams();
  return (
    <header id="header">
      <nav
        id="main-nav"
        className="navbar navbar-default navbar-fixed-top"
        role="banner"
      >
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to={"/"} href="#">
              <img
                height={60}
                width={80}
                src="assets/images/logo.png"
                alt="logo"
              />
            </Link>
          </div>

          <div className="collapse navbar-collapse navbar-right">
            <ul className="nav navbar-nav">
              <li className="scroll active">
                <a href="#home">Home</a>
              </li>
              <li className="scroll">
                <a href="#about">About</a>
              </li>
              <li className="scroll">
                <a href="#our-team">Export</a>
              </li>
              <li className="scroll">
                <a href="#portfolio">Our Designs</a>
              </li>
              <li className="scroll">
                <a href="#our-products">Products</a>
              </li>
              <li className="scroll">
                <a href="#contact-us">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
