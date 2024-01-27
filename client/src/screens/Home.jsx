import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import dog1 from "../images/dog11.png";
// import dogselfie from "../images/dogSelfie.png";
import { Link } from "react-router-dom";
import React from "react";
import Loader from "../components/Loader";
import Process from "./Process";

function Home() {
  return (
    <div className="overflow-x-hidden relative w-full">
      <div>
        <Navbar />
      </div>
      {/* <Loader/> */}
      {/* home page */}
      <div className="relative flex flex-row">
        <img className="relative" src={dog1} alt="" height={"100vh"} />
        <div class="absolute m-6 p-8 px-4 py-3 bg-blobColor rounded-lg opacity-65 z-0">
          <h1 class="relative z-10 font-poppins rounded-md w-[260px] text-lg">
            Welcome to guardingPaws.com! Here, we champion the welfare,
            protection, and advocacy for our beloved canine companions. Our
            platform is dedicated to raising awareness, providing resources, and
            offering support for those passionate about ensuring the safety and
            well-being of dogs everywhere.
          </h1>
        </div>
      </div>

      <div className="flex flex-col justify-evenly mt-4 mb-4">
        <div className="w-[1200px] md:w-[600px] sm:w-[300px]">
          <ul className="relative w-full justify-evenly flex flex-row gap-y-6 sm:flex-col mt-7 mb-10">
            <li className="flex flex-row justify-between gap-x-3">
              <div className="bg-yellow-main h-6 w-6 text-center rounded-lg">
                <i class="ri-article-line"></i>
              </div>
              <Link
                to="/lists"
                className="relative font-poppins text-md z-10 hover:underline text-ellipsis"
              >
                <strong>Charity Lists</strong>
              </Link>
            </li>
            <li className="flex flex-row justify-between gap-x-3">
              <div className="bg-yellow-main h-6 w-6 text-center rounded-lg">
                <i class="ri-community-line"></i>
              </div>
              <Link
                to="/login"
                className="relative font-poppins text-md z-10 hover:underline"
              >
                <strong>Donate</strong>
              </Link>
            </li>
            <li className="flex flex-row justify-between gap-x-3">
              <div className="bg-yellow-main h-6 w-6 text-center rounded-lg">
                <i class="ri-first-aid-kit-line"></i>
              </div>
              <Link
                to="/forum"
                className="relative font-poppins text-md z-10 hover:underline"
              >
                <strong>Pet Advice</strong>
              </Link>
            </li>
            {/* <li className="flex flex-row justify-between gap-x-3">
                        <div className="bg-yellow-main h-6 w-6 text-center rounded-lg">
                            <i class="ri-home-smile-line"></i>
                        </div>
                        <Link to="/rehoming" className="relative font-poppins text-sm z-10 hover:underline"><strong>Rehoming Centres</strong></Link>
                    </li> */}
          </ul>
        </div>
        {/* <img src={dogselfie} className="relative -left-56" alt="" height="140px" /> */}
        <div className="max-w-screen-xl flex flex-wrap relative w-[1080px] mx-auto items-center text-center justify-between">
          <h3 className="text-4xl text-center font-poppins mb-5 bg-yellow-main items-center px-2 rounded-md">
            Charity of the week
          </h3>
          <div>
            {/*  */}
            <div
              class="p-7 w-full bg-[url(./images/bg1.png)] max-h-fit cursor-pointer
              bg-cover transition-all duration-200
              bg-white hover:scale-105 rounded-lg"
            >
              <h3 class="font-poppins text-3xl font-bold pt-4">Charity-name</h3>
              <h4 className="text-xl font-bold pt-3">Mission</h4>
              <p class="font-poppins py-3 text-grayText leading-normal">
                Simplify your recurring, international and team expenses with
                savings on every spend. Save upto 10 lacs month.
              </p>
              <h4 className="text-xl font-bold pt-3">Impact</h4>
              <p class="font-poppins py-3 text-grayText leading-normal">
                Simplify your recurring, international and team expenses with
                savings on every spend. Save upto 10 lacs every month.
              </p>
              <h4 className="text-xl font-bold pt-3">Success Story</h4>
              <p class="font-poppins py-3 text-grayText leading-normal">
                Simplify your recurring, international and team expenses with
                savings on every spend. Save upto 10 lacs every month.
              </p>
              <div class="flex flex-row items-center cursor-pointer group">
                <a
                  href="/donate"
                  class="font-poppins font-bold bg-yellow-main p-2 rounded-md hover:text-white
                      transition-all duration-200"
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Process />
        </div>
        <div className="max-w-screen-xl flex flex-wrap relative w-[1080px] mx-auto  gap-y-4 mb-12 justify-between">
          <h3 className="text-4xl font-poppins font-bold">Join Us</h3>
          <p className="text-2xl font-poppins">
            Guarding Paws is more than just a website; it's a
            community of animal lovers committed to making a difference. Join us
            in supporting and promoting the well-being of animals worldwide.
            Together, we can create a world where all creatures thrive.
          </p>
          <a
                  href="/contact"
                  class="font-poppins font-bold bg-yellow-main p-2 rounded-md hover:text-white
                      transition-all duration-200"
                >
                  Join
                </a>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
