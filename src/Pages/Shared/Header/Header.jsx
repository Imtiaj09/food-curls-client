import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
        <Link to="/foodservices">Services</Link>
        <Link to="/blog">Blogs</Link>
      </li>
    </>
  );

  const signIn = (
    <>
      <li className="font-semibold">
        <Link to="/login">Login</Link>
      </li>
    </>
  );

  const afterLogin = (
    <>
      <li className="font-semibold">
        <Link to="/reviews">My Reviews</Link>
        <Link to="/addService">Add Services</Link>
        <Link onClick={handleLogOut} to="">
          Sign Out
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar h-12 mb-12 pt-4 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
            {user?.uid ? <>{afterLogin}</> : <>{signIn}</>}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
          {user?.uid ? <>{afterLogin}</> : <>{signIn}</>}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/signup" className="btn btn-outline btn-info">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Header;
