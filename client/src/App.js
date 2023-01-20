import React from 'react'
import Home from './Pages/Home'
import { Login } from './Pages/Login'
import { Register } from './Pages/Register';
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import Leftbar from './Components/Leftbar'
import Rightbar from './Components/Rightbar'
import { ThemeProvider } from 'styled-components';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate
} from "react-router-dom";
import { useContext } from 'react';
import { DarkModeContext } from './Context/darkModeContext';
import Success from './Pages/Success';
import Error from './Pages/Error'
import { AuthContext } from './Context/authContext';
import { QueryClient, QueryClientProvider } from 'react-query'
import Logout from './Pages/Logout';


const light_theme = {
  textColor: "whitesmoke",
  bg: "#222",
  logo: "white",
  bgSoft: "#333",
  textColorSoft: "lightgray",
  border: "#444"
}
const dark_theme = {
  textColor: "#000",
  bg: "white",
  logo: "darkblue",
  bgSoft: "#f6f3f3",
  textColorSoft: "#555",
  border: "lightgray"
}

export default function App() {
  const { currentUser } = useContext(AuthContext)
  const { darkMode } = useContext(DarkModeContext);
  const queryClient = new QueryClient()
  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={darkMode ? dark_theme : light_theme}>
          <div>
            <Navbar />
            <div style={{ display: "flex", justifyContent: "space-between", alignContent: "center", flexDirection: "row" }}>
              <Leftbar />
              <Home />
              <Rightbar />
            </div>
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    );

  };
  const ProtectedRoute = ({ children }) => {
    if (currentUser.username == 0) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      Children: [
        {
          path: "*",
          element: <Home />
        },
        {
          path: "profile",
          element: <Profile />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/success",
      element: <Success />,
    },
    {
      path: "/err",
      element: <Error />,
    },
    {
      path: "/logout",
      element: <Logout />,
    },

  ]);
  return (
    <RouterProvider router={router} />
  )
}
