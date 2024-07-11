import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { StoreContext } from "../../context/StoreContext";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { token, setToken } = useContext(StoreContext);
  const location = useLocation();
  const navigate = useNavigate();

  const isRegisterPage = location.pathname === "/reg";

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <h3 className="logo">
          Food<span className="text-warning">Ferry</span>
        </h3>
      </Link>
      {!isRegisterPage && (
        <>
          <ul className="navbar-menu">
            {!token && (
              <li>
                <Link to="/">Home</Link>
              </li>
            )}
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <a href="#footer">Contact Us</a>
            </li>
          </ul>
          <div className="navbar-right">
            {token && (
              <>
                <div className="navbar-search-icon">
                  <Link to="/cart" aria-label="Cart">
                    <FaShoppingCart
                      style={{ color: "grey" }}
                      className="fs-3"
                    />
                  </Link>
                  <div className="dot"></div>
                </div>
              </>
            )}
            {!token ? (
              <Link to="/reg" className="btn btn-warning">
                Sign in
              </Link>
            ) : (
              <div className="navbar-profile">
                <FaUserCircle style={{ color: "grey" }} className="fs-3" />
                <ul className="nav-profile-dropdown">
                  <li className="mt-3">
                    <Link to={"/myOrder"}>Orders</Link>
                  </li>

                  <hr />
                  <li>
                    <Link to="/cart">Cart</Link>
                  </li>
                  <hr />
                  <li onClick={logout} className="pb-2">
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
