import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";

import Registration from "../pages/Register";
import Books from "../pages/Books";
import AddBook from "../pages/AddBook";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/books",
        element: <Books></Books>,
        loader:() => fetch(`${import.meta.env.VITE_API_URL}/books`)
      },
      {
        path: "/addBook",
        element: <AddBook></AddBook>
        
      },
    ],
  },
]);
