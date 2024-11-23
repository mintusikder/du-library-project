import { Helmet } from "react-helmet-async";
import { FaAddressBook, FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = true;
  return (
    <div>
      <Helmet>
        <title>Dashboard | Menu</title>
      </Helmet>
      <div className="flex">
        <div className="w-64 min-h-screen bg-black-400">
          <ul className="menu p-4">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/book">
                    <FaShoppingCart></FaShoppingCart> Book
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addBook">
                    <FaAddressBook></FaAddressBook> Add Book
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/book">
                    <FaShoppingCart></FaShoppingCart> All Book
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider "></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
