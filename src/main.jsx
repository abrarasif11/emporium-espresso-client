import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AddCoffee from "./Component/AddCoffee/AddCoffee";
import UpdateCoffee from "./Component/UpdateCoffee/UpdateCoffee";
import Main from "./Component/Layout/Main";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import AuthProvider from "./firebase/provider/AuthProvider";
import Users from "./Component/Register/Users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: () => fetch("https://emporium-espresso-server.vercel.app/coffee"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(`https://emporium-espresso-server.vercel.app/coffee/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: '/users',
        element: <Users/>,
        loader : () => fetch('https://emporium-espresso-server.vercel.app/user')
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
