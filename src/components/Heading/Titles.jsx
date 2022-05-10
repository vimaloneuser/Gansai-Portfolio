import React from "react";
import PropTypes from "prop-types";

const SectionTitle = ({ title }) => {
  return (
    <div className="col-lg-12 text-center">
      <h2 className="section-title">{title}</h2>
    </div>
  );
};

const HeaderTitle = ({ title }) => {
  return (
    <div className="col-12 text-center">
      <h1 className="text-white font-tertiary">{title}</h1>
    </div>
  );
};

// Prop types
SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export { HeaderTitle, SectionTitle };
