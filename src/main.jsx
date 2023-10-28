import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPages from "./Pages/login";
import CreateAccount from "./Pages/createaccount";
import LoginAdmin from "./Pages/loginAdmin";
// import DashboardAdmin from './assets/Pages/dashboardAdmin'
// import AdminLayout from './Components/AdminLayout'
import Table from "./Components/Table";
import AddProduct from "./Components/FormEditProduct";
// import SideBarDash from "./Components/LoginAdminLayout";
// import DashboardAdmin from "./assets/Pages/dashboardAdmin";
import SideBarDash from "./Components/SideBarDash";
import Product from "./Pages/Product";
import EditProduct from "./Pages/editProduct";
import Home from './pages/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/login",
    element: <LoginPages />,
  },
  {
    path: "/login-admin",
    element: <LoginAdmin />,
  },
  {
    path: "/createaccount",
    element: <CreateAccount />,
  },
  {
    path: "/product",
    element: <Product/>
  },
  {
    path: "/tes-table",
    element: <Table />,
  },
  {
    path: "/add-product",
    element: <AddProduct />,
  },
  {
    path: "/tes-sidebar",
    element: <SideBarDash />,
  },
  
  {
    path: "/edit-product",
    element: <EditProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
