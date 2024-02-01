import React from "react";
import Search from "../icons/Search";
import { useNavigate } from "react-router-dom";
import Hamburger from "../icons/Hamburger";
import Cancel from "../icons/Cancel";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../context/sidebarSlice";
import Logout from "../icons/Logout";

function NavbarForum() {
  return (
    <div
      className="fixed bg-white dark:bg-[#1E212A]
     top-0 left-0 right-0 z-10 h-14  shadow-md  flex items-center justify-between
     px-4
     md:px-20"
    >
      <div className="text-sm md:text-base font-bold text-purple-500 cursor-pointer flex items-center gap-4">
        <div
          onClick={() => dispatch(toggle())}
          className="
          transition-transform   ease-linear
        duration-700 cursor-pointer
        "
        >
          {!open ? <Hamburger /> : <Cancel />}
        </div>
        H-Forum
      </div>
      <Logout />
      <div className="hidden md:flex items-center gap-5">
        <div
          className="cursor-pointer text-sm 
          md:text-base dark:text-white"
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/login");
          }}
        >
          Logout
        </div>
      </div>
    </div>
  );
}

export default NavbarForum;
