import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Authentication/Login.jsx";
import Register from "./Authentication/Register.jsx";
import PrivateRoute from "./PrivateRoutes/PrivateRoute.jsx";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Layout/Dashboard.jsx";
import UserManage from "./Pages/AdminDash/UserManage.jsx";
import AdminWelcome from "./Pages/AdminDash/AdminWelcome.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <AdminWelcome />,
      },

      {
        path: "/userManage",
        element: <UserManage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
);
