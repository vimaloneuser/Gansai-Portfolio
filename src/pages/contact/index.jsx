import React from "react";
import Contact from "../../components/Contact";
import Heading from "../../components/Heading";

const ContactPage = () => {
  return (
    <React.Fragment>
      <Heading title={"Contact"} />
      <Contact />
    </React.Fragment>
  );
};

export default ContactPage;
