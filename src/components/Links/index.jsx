import React from "react";
import { data } from "../../common/constants";

const Links = () => {
  return (
    <section className="section pb-0">
      <div className="container">
        <div className="client-logo-slider d-flex align-items-center custom-links row ">
          {data.links.map((item, key) => (
            <a
              key={key}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="col-lg-1 col-sm-3 col-xs-4 mt-2 custom-links-container"
            >
              <img
                className="d-unset img-fluid custom-links-logo"
                src={item.logo}
                alt="client-logo"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Links;
