import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Social/Login";
import Registration from "../pages/Social/Register";
import Books from "../pages/book/Books";
import AddBook from "../pages/book/AddBook";
import UpdateBook from "../pages/book/UpdateBook";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../layout/Dashboard";
import Book from "../pages/Dashboard/Book";
import BookCard from "../pages/Dashboard/BookCard";

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
      //   {
      //     path: "/registration",
      //     element: <Registration></Registration>,
      //   },
      {
        path: "/books",
        element: <Books></Books>,
      },
      {
        path: "/addBook",
        element: <AddBook></AddBook>,
      },
      {
        path: "/updateBook/:id",
        element: <UpdateBook></UpdateBook>,
        loader: ({ params }) =>
          fetch(`https://library-book-server.vercel.app/books/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard/book",
        element: <Book></Book>,
      },
      {
        path: "/dashboard/addBook",
        element: <AddBook></AddBook>,
      },
      {
        path: "/dashboard/book",
        element: <BookCard></BookCard>,
      },
    ],
  },
]);
