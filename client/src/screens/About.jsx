import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import dogg from "../images/dog2.png";
import img1 from "../images/my pic.jpeg";
import Loader from "../components/Loader";

function About() {
  return (
    <div className="overflow-x-hidden relative w-full">
      {/* <Loader/> */}
      <div>
        <Navbar />
      </div>
      <div className="relative">
        <img src={dogg} alt="" />
        <div class="absolute p-8 px-4 py-3">
          <h1 class="bg-blobColor font-poppins rounded-md w-[260px] text-xl text-black">
          At Guarding Paws, we are passionate advocates for the well-being and safety of our beloved animal
           companions. Our mission is to provide a comprehensive resource for dog lovers, offering valuable information and services
          to ensure the health, happiness, and protection of your furry friends.
          </h1>
        </div>
      </div>
      <div>
          <div className="relative left-0 px-4 py-3 bg-yellow-main-500/50 w-full">
          <h1 class="bg-blobColor justify-center items-center font-poppins rounded-md w-full text-xl text-black">
          At Guarding Paws, we are passionate advocates for the well-being and safety of our beloved animal
           companions. Our mission is to provide a comprehensive resource for dog lovers, offering valuable information and services
          to ensure the health, happiness, and protection of your furry friends.
          </h1>
            {/* <h1 className="text-black font-semibold text-4xl">Who are we ?</h1> */}
            {/* bg-blobColor w-8 top-4 h-16 left-7 md:h-10 opacity-60 rounded-lg */}
          </div>
      </div>

      <div className="relative w-full h-[800px]">
        <div className="my-auto justify-evenly">
          <h2 className="text-3xl font-poppins text-center mb-3 py-8">
            Meet our crew
          </h2>
          <div className="flex flex-row mx-auto justify-evenly">
            <div className="flex flex-col">
              <img
                src={img1}
                alt=""
                width={"100px"}
                className="mx-auto items-center justify-center"
              />
              <h3 className="font-poppins font-bold">Ayushi Nayan</h3>

              <div className="flex flex-row justify-evenly">
                <Link to="#">
                  <i class="ri-instagram-line"></i>
                </Link>
                <Link to="#">
                  <i class="ri-linkedin-fill"></i>
                </Link>
                <Link to="#">
                  <i class="ri-twitter-x-line"></i>
                </Link>
              </div>
            </div>
            <div>
              <img src={img1} alt="" width={"100px"} />
              <h3 className="font-poppins font-bold">Swati Kumari</h3>

              <div className="flex flex-row justify-evenly">
                <Link to="#">
                  <i class="ri-instagram-line"></i>
                </Link>
                <Link to="#">
                  <i class="ri-linkedin-fill"></i>
                </Link>
                <Link to="#">
                  <i class="ri-twitter-x-line"></i>
                </Link>
              </div>
            </div>
            <div>
              <img src={img1} alt="" width={"100px"} />
              <h3 className="font-poppins font-bold">Shubham Kumar</h3>

              <div className="flex flex-row justify-evenly">
                <Link to="#">
                  <i class="ri-instagram-line"></i>
                </Link>
                <Link to="#">
                  <i class="ri-linkedin-fill"></i>
                </Link>
                <Link to="#">
                  <i class="ri-twitter-x-line"></i>
                </Link>
              </div>
            </div>
            <div>
              <img src={img1} alt="" width={"100px"} />
              <h3 className="font-poppins font-bold">Harsh Shah</h3>

              <div className="flex flex-row justify-evenly">
                <Link to="#">
                  <i class="ri-instagram-line"></i>
                </Link>
                <Link to="#">
                  <i class="ri-linkedin-fill"></i>
                </Link>
                <Link to="#">
                  <i class="ri-twitter-x-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
