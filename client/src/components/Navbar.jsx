import React from "react";
import { Link } from "react-router-dom";
import img from "../images/main-logo1234.png";

function Navbar() {
  return (
    <nav className="bg-yellow-main shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap relative w-[1080px] mx-auto items-center justify-between">
        <Link to="/" className="cursor-pointer">
          <img
            src={img}
            className="relative"
            alt="guarding_paws-logo"
            width={"210px"}
          />
        </Link>
        {/* <div class="hidden w-full sm:block"> */}
          <ul className="flex flex-row space-x-6">
            <li
              className="text-black font-poppins py-7 hover:text-white cursor-pointer
               transition-all duration-200 relative group"
            >
              <Link to={"/"}>Home</Link>
              <div
                className="absolute bottom-0 w-full h-1 bg-white hidden group-hover:block
              transition-all duration-200"
              ></div>
            </li>
            <li
              className="text-black font-poppins py-7 hover:text-white  cursor-pointer
               transition-all duration-200 relative group"
            >
              <Link to={"/about"}>About</Link>
              <div
                className="absolute bottom-0 w-full h-1 bg-white hidden group-hover:block
              transition-all duration-200"
              ></div>
            </li>
            <li
              className="text-black font-poppins py-7 hover:text-white  cursor-pointer
               transition-all duration-200 relative group"
            >
              <Link to={"/contact"}>Contact</Link>
              <div
                className="absolute bottom-0 w-full h-1 bg-white hidden group-hover:block
              transition-all duration-200"
              ></div>
            </li>
            <li
              className="text-black font-poppins py-7 hover:text-white  cursor-pointer
               transition-all duration-200 relative group"
            >
              <Link to={"/login"}>Login</Link>
              <div
                className="absolute bottom-0 w-full h-1 bg-white hidden group-hover:block
              transition-all duration-200"
              ></div>
            </li>
          </ul>
        </div>
      {/* </div> */}
    </nav>
  );
}

export default Navbar;
