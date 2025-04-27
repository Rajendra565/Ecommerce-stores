import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import StairsIcon from "@mui/icons-material/Stairs";
import AcUnitIcon from "@mui/icons-material/AcUnit";

function Topbar() {
  return (
    <div className="bg-[#000] p-1.5 w-screen text-[#fff]">
      <div
        className="topbar  mx-10
     flex justify-between items-center"
      >
        {/* Left side */}
        <div className="left hidden md:flex gap-2 ">
          <a href="#" className="hover:text-gray-500">
            <FacebookIcon />
          </a>
          <a href="#" className="hover:text-gray-500">
            <InstagramIcon />
          </a>
          <a href="#" className="hover:text-gray-500">
            <XIcon />
          </a>
        </div>
        {/* Center */}
        <div className=" text-sm items-center justify-center  text-center flex flex-grow  ">
          <marquee behavior="" direction="">
            <span className="flex items-center gap-2">
              <AcUnitIcon />
              <b className=" text-[#fff] text-2xl">
                Welcome to fashion clothes
              </b>
              <AcUnitIcon />
            </span>
          </marquee>
        </div>
        {/* Right side */}
        <div className="right hidden md:block">
          <span>+917847832039</span>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
