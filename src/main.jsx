import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AddCoffee from "./Component/AddCoffee/AddCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:'/addCoffee',
    element: <AddCoffee/>
  },
  {
    path:'/updateCoffee'
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
