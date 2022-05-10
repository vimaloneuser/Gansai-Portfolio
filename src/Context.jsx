import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const LoaderContext = createContext({
  loading: false,
  setLoading: () => {},
});
export const AuthContext = createContext({
  auth: "protected",
  setAuth: () => {},
});

const Context = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState("public");

  const loader = { loading, setLoading };
  const authentication = { auth, setAuth };

  return (
    <LoaderContext.Provider value={loader}>
      <AuthContext.Provider value={authentication}>
        {children}
      </AuthContext.Provider>
    </LoaderContext.Provider>
  );
};

Context.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Context;
