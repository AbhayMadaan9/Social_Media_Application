import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async(Inputs) => {
      const res = await axios.post("http://localhost:5500/auth/login", Inputs,  {withCredentials: true},
      ); //withcredentials is made true when working with cookies
    setCurrentUser(res.data)
    
  };
  

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};

// this has two main func
// 1.Provide info of user using login
// 2.protected routing in app.js 