// AuthContext.js
import { createContext, useState } from "react";
import Axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let user = null;
  const login = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/api/isLoggedIn",
    }).then((res) => {
      setIsLoggedIn(res.data.isLoggedIn);
      user = res.data.isLoggedIn;
      // console.log(res);
    });
    isLoggedIn ? setIsLoggedIn(user) : setIsLoggedIn(user);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
