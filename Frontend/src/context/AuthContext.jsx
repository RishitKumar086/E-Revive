// AuthContext.js
import { createContext, useState } from "react";
import Axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let user = null;
  const login = async () => {
    try {
      const response = await Axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:4000/api/isLoggedIn",
      });
  
      setIsLoggedIn(response.data.isLoggedIn);
      user = response.data.isLoggedIn;
      
      isLoggedIn ? setIsLoggedIn(user) : setIsLoggedIn(user);
    } catch (error) {
      // Handle errors here
      console.error("Error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
