import React from "react";
import { Link, useParams } from "react-router-dom";
import { route } from "../../common/constants";
// import { Link, useParams } from "react-router-dom";

const Header = () => {
  const params = useParams();
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
            <a className="navbar-brand" href="/">
              <img id="nav-logo" src="assets/images/logo.png" alt="logo" />
            </a>
          </div>

          <div className="collapse navbar-collapse navbar-right">
            {params === "/" ? (
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
                  <Link to={route.category}>Products</Link>
                </li>
                <li className="scroll">
                  <a href="#contact-us">Contact</a>
                </li>
                <li className="scroll">
                  <Link to={route.packaging}>Packing List</Link>
                </li>
                <li className="scroll">
                  <Link to={route.quality}>Quality</Link>
                </li>
                <li className="scroll">
                  <a
                    href="https://drive.google.com/file/d/1f_BT4S6dJx-Y7R7H9b9mo_M0vPuozGJp/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Certificate
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="nav navbar-nav">
                <li className="scroll active">
                  <a href={route.home}>Home</a>
                </li>
                <li className="scroll">
                  <Link to={route.about}>About</Link>
                </li>
                <li className="scroll">
                  <Link to={route.export}>Export</Link>
                </li>
                <li className="scroll">
                  <Link to={route.category}>Products</Link>
                </li>
                <li className="scroll">
                  <Link to={route.contact}>Contact</Link>
                </li>
                <li className="scroll">
                  <Link to={route.packaging}>Packing List</Link>
                </li>
                <li className="scroll">
                  <Link to={route.quality}>Quality</Link>
                </li>
                <li className="scroll">
                  <a
                    href="https://drive.google.com/file/d/1f_BT4S6dJx-Y7R7H9b9mo_M0vPuozGJp/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Certificate
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
