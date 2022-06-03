import React, { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import { firebaseConfig } from "../../config/firebase";
import { initializeApp } from "firebase/app";

const Products = () => {
  const [products, setProducts] = useState({ sizes: [], catelogs: [] });
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(
    app,
    "https://gansai-tiles-default-rtdb.asia-southeast1.firebasedatabase.app"
  );
  const categoryId = localStorage.getItem("categoryId");
  useEffect(() => {
    const starCountRef = ref(db, "products/" + categoryId);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      var sizes = [];
      if (data?.catelogs) {
        data?.catelogs.map((item) => {
          if (!sizes.includes(item?.size)) sizes.push(item?.size);
        });
        setProducts({
          ...data,
          sizes,
        });
      }
    });
  }, []);

  return (
    <React.Fragment>
      <section id="our-products" className="hero-action-section">
        <div className="container ow-section">
          <h4 className="hero-action-title">
            <br />
            Products / {products?.name}
          </h4>
        </div>
      </section>

      <section>
        <div className="container">
          {products?.sizes.map((itm, indx) => (
            <div className="row" key={indx}>
              <div className="features">
                <h1
                  style={{
                    color: "orange",
                    textDecoration: "underline",
                  }}
                >
                  {itm}
                </h1>
                {products?.catelogs.map((item, index) => (
                  <div
                    key={index}
                    className="col-md-4 col-xs-6 col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-duration="300ms"
                    data-wow-delay="0ms"
                    style={{
                      backgroundColor: "#4871C0",
                      height: 60,
                      padding: 60 / 4,
                      margin: 4,
                      color: "white",
                    }}
                  >
                    {/* <a href="#"> */}
                    <h4 className="media-heading">
                      <a
                        style={{ color: "white" }}
                        rel="noreferrer"
                        href={item.url}
                        target="_blank"
                      >
                        {item.name}
                      </a>
                    </h4>
                    {/* </a> */}
                  </div>
                ))}
              </div>
              <br />
              <br />
              <br />
              <br />
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Products;
