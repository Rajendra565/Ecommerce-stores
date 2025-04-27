import { Link, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import Logo from "../../assets/logo.png";
import Logo from "../../assets/Kalki-Fashion-Logo.png";
// import "../../Style/Navbar.css";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import SearchBar from "./SearchBar";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "auto";
  }, [visible]);

  return (
    <div className="relative">
      {/* BACKDROP for sidebar */}
      {visible && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-30 z-40"
          onClick={() => setVisible(false)}
        />
      )}

      <nav className="flex items-center justify-between py-4 px-6 bg-[#FFFFFF] w-full shadow-sm shadow-black">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="cursor-pointer">
            <img src={Logo} alt="logo" className=" w-24 " />
          </Link>
        </div>

        {/* Center links (visible only on xl and up) */}
        <div className="hidden xl:flex gap-3 items-center capitalize">
          {["man", "woman", "kids", "luxe"].map((item) => (
            <NavLink
              key={item}
              to={`/${item}`}
              className=" hover:text-[#fff] hover:bg-[#000]"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#000" : "",
                borderRadius: "10px",
                padding: "10px 20px",
                color: isActive ? "#fff" : "",
              })}
            >
              {item}
            </NavLink>
          ))}
        </div>

        {/* Right-side icons */}
        <div className="flex gap-3 items-center">
          <SearchBar />

          {/* User icon */}
          <div className="userIon relative">
            <PersonIcon
              className="cursor-pointer text-7xl"
              onClick={() => setShowUserMenu(!showUserMenu)}
            />

            {showUserMenu && (
              <div className="user-detils absolute top-4 right-0 w-40 z-50 bg-white shadow-lg rounded-lg p-4 mt-2 gap-3">
                <b className="text-lg font-semibold">My Account</b>
                <Link to="/profile">
                  <p className="text-sm hover:bg-[#414141] hover:scale-105 hover:text-[#fff] cursor-pointer rounded-lg p-2">
                    Profile
                  </p>
                </Link>
                <Link to="/orderdetails">
                  <p className="text-sm hover:bg-[#414141] hover:scale-105 hover:text-[#fff] cursor-pointer rounded-lg p-2">
                    Orders
                  </p>
                </Link>
                <p className="text-sm hover:bg-[#414141] hover:scale-105 hover:text-[#fff] cursor-pointer rounded-lg p-2">
                  Settings
                </p>
                <p className="text-sm hover:bg-[#414141] hover:scale-105 hover:text-[#fff] cursor-pointer rounded-lg p-2">
                  Logout
                </p>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link to="/addtocart" className="relative">
            <ShoppingCartIcon className="cursor-pointer text-4xl sm:text-5xl" />
            <span className="absolute bottom-1 left-4 text-white scale-75 bg-red-700 p-1 rounded-full text-xs font-semibold">
              10
            </span>
          </Link>

          {/* Wishlist */}
          <Link to="/wishlist" className="relative">
            <FavoriteIcon className="cursor-pointer text-3xl" />
            <span className="absolute bottom-1 left-3 text-white scale-75 bg-red-700 p-1 rounded-full text-xs font-semibold">
              10
            </span>
          </Link>

          {/* Hamburger menu (visible only on small screens) */}
          <div className="block xl:hidden" onClick={() => setVisible(true)}>
            <IconButton sx={{ bgcolor: "#000", color: "#fff" }}>
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </nav>

      {/* Slide-out mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-50 w-72 shadow-2xl transition-all duration-500 ease-in-out ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <IconButton onClick={() => setVisible(false)}>
              <DeleteIcon />
            </IconButton>
          </div>

          {/* Mobile nav links */}
          <div className="flex flex-col px-6 gap-4 text-lg capitalize">
            {["man", "woman", "kids", "luxe"].map((item) => (
              <NavLink
                key={item}
                to={`/${item}`}
                className="hover:text-[#0a0a0a] text[#fff]"
                onClick={() => setVisible(false)}
              >
                {item}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
