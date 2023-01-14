import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: "Abhay",
      profilePic:
        "https://media.licdn.com/dms/image/D4D03AQG8Y6CN1LVyVQ/profile-displayphoto-shrink_800_800/0/1671369794605?e=2147483647&v=beta&t=GPqqDsANInhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzkyXfNfGvQcUB3Kh0PrNLmT9LvbiJGglqAYDd6DD&s2oIf_gGHKBZ5h-6UzT6l7zVWcOdYEn5L8",
    });
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