import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const userLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };
  const contextValue = {
    token,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <>
      <AuthContext.Provider value={contextValue}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContext;
