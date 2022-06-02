import React, { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import { firebaseConfig } from "../../config/firebase";
import { initializeApp } from "firebase/app";
import { Link } from "react-router-dom";
import { route } from "../../common/constants";

const CategoryListing = () => {
  const [category, setCategory] = useState([]);
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(
    app,
    "https://gansai-tiles-default-rtdb.asia-southeast1.firebasedatabase.app"
  );

  useEffect(() => {
    const starCountRef = ref(db, "products");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setCategory(data);
    });
  }, []);


  return (
    <section id="services">
      <div className="container">
        <div className="section-header">
          <br />
          <h2 className="section-title wow fadeInDown">Product categories</h2>
        </div>

        <div className="row">
          <div className="features">
            {category.map((item, index) => (
              <div
                key={index}
                className="col-md-4 col-sm-6 wow fadeInUp"
                data-wow-duration="300ms"
                data-wow-delay="0ms"
              >
                <Link to={`${route.products}/${index}`}>
                  <div className="media service-box">
                    <div className="media-body">
                      <h4 className="media-heading">{item.name}</h4>
                      {item?.description != null && item.description != "" && (
                        <p>{item.description}</p>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryListing;
