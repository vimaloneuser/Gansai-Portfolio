import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import routes from "./routes/routes";
import "toastr/build/toastr.min.css";
import Layout from "./components/Layout";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config/firebase";
// import { getDatabase } from "firebase/database";

const App = () => {
  console.log(firebaseConfig);
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  useEffect(() => {
    initializeApp(firebaseConfig);
    // const database = getDatabase(app);
  }, []);

  return (
    <React.Fragment>
      <ScrollToTop />
      <Routes>
        {routes.map(({ path, component: Component }, index) => (
          <Route key={index} element={<Layout />}>
            <Route path={path} element={<Component />} />
          </Route>
        ))}
      </Routes>
    </React.Fragment>
  );
};

export default App;
