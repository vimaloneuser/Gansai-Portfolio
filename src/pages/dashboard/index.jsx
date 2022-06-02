import React from "react";
import About from "../../components/About";
import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import Export from "../../components/Export";
// import Gallery from "../../components/Gallery";
// import Products from "../../components/Products";
import WhatWeDid from "../../components/WhatWeDid";
const Dashboard = () => {
  return (
    <React.Fragment>
      <Banner />
      <About />
      <Export />
      {/* <Gallery /> */}
      {/* <Products /> */}
      <WhatWeDid />
      <Contact />
    </React.Fragment>
  );
};

export default Dashboard;
