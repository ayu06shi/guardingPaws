import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-yellow-main">
      <div className="relative w-[1080px] flex flex-row justify-between">
        <div className="relative flex flex-col py-10 px-10">
          <h4 className="font-poppins font-semibold py-2">Keep exploring</h4>
          <ul className="flex flex-col">
            <li className="font-poppins text-black">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="font-poppins text-black">
              <Link to={"/about"}>Who are we?</Link>
            </li>
            <li className="font-poppins text-black">
              <Link to={"#"}>Donate</Link>
            </li>
          </ul>
        </div>
        <div className="relative flex flex-col py-10 px-12">
          <h4 className="font-poppins font-semibold py-2">Connect</h4>
          <ul className="flex flex-row">
            <li className="px-1">
              <Link to={"mailto:"}>
                <i class="ri-mail-line"></i>
              </Link>
            </li>
            <li className="px-1">
              <Link to="#">
                <i class="ri-phone-line"></i>
              </Link>
            </li>
          </ul>
          <ul className="flex flex-row">
            <li className="px-1">
              <Link to="#">
                <i class="ri-instagram-line"></i>
              </Link>
            </li>
            <li className="px-1">
            <Link to="#">
              <i class="ri-linkedin-fill"></i>
              </Link>
            </li>
            <li className="px-1">
            <Link to="#">
              <i class="ri-twitter-x-line"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="relative flex flex-col py-10 px-12">
          <h4 className="font-poppins font-semibold py-2">Stay in the Know</h4>
          <p className="relative font-poppins">
            To stay in the loop of guardingPaws.com's offerings and mindfulness
            tips, signup for our Newsletter here.
          </p>
        </div>

        <div className="relative flex flex-col py-10 px-12">
          <label
            htmlFor="email"
            className="relative font-poppins font-semibold"
            aria-placeholder=""
          >
            Email Address
          </label>
          <input type="email" />
          <button className="flex float-start font-poppins">Signup</button>
        </div>
      </div>

      <span className="flex justify-center items-center font-poppins">
        &copy; 2024 GuardingPaws. All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;
