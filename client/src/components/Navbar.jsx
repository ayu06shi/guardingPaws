import React from "react";
import { Link } from "react-router-dom";
import img from "../images/main-logo1234.png";

function Navbar() {
  return (
    <nav className="bg-yellow-main shadow-md">
      <div className="max-w-screen-xl flex flex-wrap relative w-[1080px] mx-auto items-center justify-between">
        <Link to="/" className="cursor-pointer">
          <img
            src={img}
            className="relative"
            alt="guarding_paws-logo"
            width={"210px"}
          />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
                focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
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
              <Link to={"/signup"}>Donate</Link>
              <div
                className="absolute bottom-0 w-full h-1 bg-white hidden group-hover:block
              transition-all duration-200"
              ></div>
            </li>
            <li
              className="text-black font-poppins py-7 hover:text-white  cursor-pointer
               transition-all duration-200 relative group"
            >
              <Link to={"#"}>Contact</Link>
              <div
                className="absolute bottom-0 w-full h-1 bg-white hidden group-hover:block
              transition-all duration-200"
              ></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
