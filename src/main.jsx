import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Authentication/Login.jsx";
import Register from "./Authentication/Register.jsx";
import PrivateRoute from "./PrivateRoutes/PrivateRoute.jsx";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Layout/Dashboard.jsx";
import { HelmetProvider } from "react-helmet-async";
import UserManage from "./Pages/AdminDash/UserManage.jsx";
import AdminWelcome from "./Pages/AdminDash/AdminWelcome.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <RouterProvider router={routes}></RouterProvider>
      </React.StrictMode>
    </QueryClientProvider>
  </HelmetProvider>
);
