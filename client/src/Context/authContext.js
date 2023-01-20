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
  const logout = async() => { //it do 2 things: 1.remove access token using the api 2.remove the data from localstorage
    const res = await axios.post("http://localhost:5500/auth/logout",  {withCredentials: true},
    ); //withcredentials is made true when working with cookies
  setCurrentUser(null)
  
};

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// this has two main func
// 1.Provide info of user using login
// 2.protected routing in app.js 