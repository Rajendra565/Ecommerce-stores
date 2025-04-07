import { Link, NavLink } from "react-router-dom";
import React from "react";
import Logo from "../../assets/logo.png";
import "../../Style/Navbar.css";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <div>
      <nav className=" flex items-center justify-between py-4 px-10 bg-[#e4e4e4d6] w-screen">
        {/* Logo center */}
        <div className="logo">
          <Link to="/" className=" cursor-pointer">
            <img src={Logo} alt="image" className=" w-12 cursor-pointer" />
          </Link>
        </div>
        {/* links left */}
        <div className="flex xl:block 2xl:block  md:hidden sm:hidden gap-3 items-center">
          <div className="center-links flex gap-3 text-center capitalize">
            <NavLink
              className=" hover:bg-[#f1843c] hover:text-[#fff]"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#f1843c" : "",
                borderRadius: "10px",
                padding: "10px 20px",
                color: isActive ? "#fff" : "#000",
              })}
              to="/man"
            >
              man
            </NavLink>
            <NavLink
              className=" hover:bg-[#f1843c] hover:text-[#fff]"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#f1843c" : "",
                borderRadius: "10px",
                padding: "10px 20px",
                color: isActive ? "#fff" : "#000",
              })}
              to="/woman"
            >
              Woman
            </NavLink>
            <NavLink
              className=" hover:bg-[#f1843c] hover:text-[#fff]"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#f1843c" : "",
                borderRadius: "10px",
                padding: "10px 20px",
                color: isActive ? "#fff" : "#000",
              })}
              to="/kids"
            >
              Kids
            </NavLink>
            <NavLink
              className=" hover:bg-[#f1843c] hover:text-[#fff]"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#f1843c" : "",
                borderRadius: "10px",
                padding: "10px 20px",
                color: isActive ? "#fff" : "#000",
              })}
              to="/luxe"
            >
              Luxe
            </NavLink>
          </div>
        </div>

        {/*right side  */}
        <div className="right-side flex gap-3 items-center mr-5">
          <div className="search">
            <SearchIcon className=" cursor-pointer" />
          </div>
          <div className="userIon relative">
            <PersonIcon className=" cursor-pointer text-7xl" />

            <div className="user-detils absolute top-4 right-0 w-40 bg-white shadow-lg rounded-lg p-4 mt-2 gap-3 ">
              <b className="text-lg font-semibold">My Account</b>
              <Link to="/profile">
                <p className="text-sm  hover:bg-[#414141] hover:scale-105 hover:text[#fff] cursor-pointer rounded-lg p-2">
                  Profile
                </p>
              </Link>
              <Link to="/orderdetails">
                <p className="text-sm  hover:bg-[#414141] hover:scale-105 hover:text[#fff] cursor-pointer rounded-lg p-2">
                  Orders
                </p>
              </Link>
              <p className="text-sm  hover:bg-[#414141] hover:scale-105 hover:text[#fff] cursor-pointer rounded-lg p-2">
                Settings
              </p>

              <p className="text-sm  hover:bg-[#414141] hover:scale-105 hover:text[#fff] cursor-pointer rounded-lg p-2">
                Logout
              </p>
            </div>
          </div>
          <Link to={"/addtocart"}>
            <div className="addtoCart relative">
              <ShoppingCartIcon className=" cursor-pointer text-7xl" />
              <span className=" absolute bottom-2 left-1 text-[#fff] bg-[#b90909] p-2 pl-3 rounded-full text-sm font-semibold scale-50">
                10
              </span>
            </div>
          </Link>
          <div className="wishlist relative">
            <Link to={"/wishlist"}>
              <FavoriteIcon className="cursor-pointer" />
              <span className=" absolute bottom-2 left-1 text-[#fff] bg-[#b90909] p-2 pl-3 rounded-full text-sm font-semibold scale-50">
                10
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
