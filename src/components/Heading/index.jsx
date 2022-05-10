import React from "react";
import { HeaderTitle } from "./Titles";
import PropTypes from "prop-types";

const Heading = ({ title }) => {
  return (
    <section className="page-title bg-dark position-relative custom-overflow-hidden">
      <div className="container">
        <div className="row">
          <HeaderTitle title={title} />
        </div>
      </div>
      <img
        src="assets/images/illustrations/page-title.png"
        alt="illustrations"
        className="bg-shape-1 w-100"
      />
      <img
        src="assets/images/illustrations/leaf-pink-round.png"
        alt="illustrations"
        className="bg-shape-2"
      />
      <img
        src="assets/images/illustrations/dots-cyan.png"
        alt="illustrations"
        className="bg-shape-3"
      />
      <img
        src="assets/images/illustrations/leaf-orange.png"
        alt="illustrations"
        className="bg-shape-4"
      />
      <img
        src="assets/images/illustrations/leaf-yellow.png"
        alt="illustrations"
        className="bg-shape-5"
      />
      <img
        src="assets/images/illustrations/dots-group-cyan.png"
        alt="illustrations"
        className="bg-shape-6"
      />
      <img
        src="assets/images/illustrations/leaf-cyan-lg.png"
        alt="illustrations"
        className="bg-shape-7"
      />
    </section>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Heading;
