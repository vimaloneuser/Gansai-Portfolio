import React from "react";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      {/* Header section  */}
      <Header />
      {/* Header section  */}

      {/* Body section  */}
      {children}
      <Outlet />
      {/* Body section  */}

      {/* Footer section */}
      <Footer />
      {/* Footer section */}
      <a
        href="https://wa.me/918734981174?text=Hi."
        className="float"
        rel="noreferrer"
        target="_blank"
      >
        <i className="fa fa-whatsapp my-float"></i>
      </a>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
