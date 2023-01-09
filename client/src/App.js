import React,{useState} from 'react'
import { Home } from './Pages/Home'
import { Login } from './Pages/Login'
import { Register } from './Pages/Register';
import Navbar from './Components/Navbar'
import Profile from './Pages/Profile'
import Leftbar from './Components/Leftbar'
import Rightbar from './Components/Rightbar'
import { ThemeProvider } from 'styled-components';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate
} from "react-router-dom";
import { store } from './store'
import { Provider } from 'react-redux'


const theme = {
  light: {
    textColor: "whitesmoke",
    bg: "#222",
    logo: "white",
    bgSoft: "#333",
    textColorSoft: "lightgray",
    border: "#444"
  },
  dark: {
    textColor: "#000",
    bg: "white",
    logo: "darkblue",
    bgSoft: "#f6f3f3",
    textColorSoft: "#555",
    border: "lightgray",
  }
}
export default function App() {
  const currentUser = false;
  const Layout = ()=> {
    return (
      <Provider store={store}>
      <ThemeProvider theme={theme}>
      <div>
      <Navbar/>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <Leftbar/>
        <Outlet/>
        <Rightbar/>
      </div>
      </div>
      </ThemeProvider>
      </Provider>
      
    );
    
  };
  const ProtectedRoute = ({ children }) => {
    if (currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>
      ),
      Children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/profile/:id",
          element: <Profile/>
        },
      ]
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>,
    },
  
  ]);
  return (
    <RouterProvider router={router} />
  )
}
