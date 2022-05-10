import "./App.css";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import routes from "./routes/routes";
import "toastr/build/toastr.min.css";
import Layout from "./components/Layout";

const App = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

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
