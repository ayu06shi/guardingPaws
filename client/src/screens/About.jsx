import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import dogg from "../images/bg-hover.png";
import img1 from "../images/my pic.jpeg";
import img2 from "../images/harsh.jpeg";
import img3 from "../images/shubham.jpeg";
import img4 from "../images/swati1.jpeg";

function About() {
  return (
    <div className="overflow-x-hidden relative w-full">
      <div>
        <Navbar />
      </div>
      <div className="relative max-w-[1080px] mx-auto flex lg:flex-col  md:flex-col sm:flex-col">
        <div
          className="relative mx-auto top-5 mb-10 p-8 max-w-[1080px] text-2xl w-2/3 bg-[url(./images/bg1.png)] max-h-fit cursor-pointer
              bg-cover hover:scale-105 transition-all duration-200
              hover:bg-[url(./images/bg.png)] "
        >
          <h3 class=" bg-opacity-30 text-2xl p-3  rounded-lg w-fit text-black">
            At Guarding Paws, we are passionate advocates for the well-being and
            safety of our beloved
            <span className="text-orange-500"> animal companions</span>.<br />
            Our mission is to provide a comprehensive resource for animal
            lovers, offering valuable information and services to ensure the
            health, happiness, and protection of your furry friends.
          </h3>
          {/* <h1 className="text-black font-semibold text-4xl">Who are we ?</h1> */}
        </div>

        <div className="relative max-w-[1200px] mx-auto h-full">
          <div className="my-auto justify-evenly p-8">
            <h1 className="relative font-poppins text-center text-3xl">
              Team <span className="text-orange-600">'Vision of Us'</span>
            </h1>

            {/* cards */}
            <div className="grid m-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-between">
              {/* card 1 */}
              <div className="flex flex-col h-fit mx-5 py-4 mb-10 rounded-xl shadow-md transition-all duration-200">
                <img
                  src={img1}
                  alt=""
                  width={"180px"}
                  // height={"100px"}
                  className="mx-auto items-center h-fit rounded-2xl justify-center"
                />
                <h3 className="font-poppins font-bold text-center mt-2">
                  Ayushi Nayan
                </h3>

                <div className="flex flex-row justify-evenly">
                  <Link
                    to="https://www.instagram.com/ayu04shi/" target="_blank"
                    className="hover:scale-110 transition-all duration-200"
                  >
                    <i class="ri-instagram-line"></i>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/ayushi-nayan-515b7326b/" target="_blank"
                    className="hover:scale-110 transition-all duration-200"
                  >
                    <i class="ri-linkedin-fill"></i>
                  </Link>
                  <Link
                    to="https://github.com/ayu06shi" target="_blank"
                    className="hover:scale-110 transition-all duration-200"
                  >
                    <i class="ri-github-fill"></i>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col  h-fit mx-5 py-4 mb-10 rounded-xl shadow-md transition-all duration-200">
                <img
                  src={img2}
                  alt=""
                  width={"180px"}
                  height={"100px"}
                  className="mx-auto h-fit items-center rounded-2xl justify-center"
                />
                <h3 className="font-poppins font-bold text-center">
                  Harsh Shah
                </h3>

                <div className="flex flex-row justify-evenly">
                  <Link
                    to="https://www.instagram.com/harshshah.3/" target="_blank"
                    className="hover:scale-110 transition-all duration-200"
                  >
                    <i class="ri-instagram-line"></i>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/harsh-shah-60b942253/" target="_blank"
                    className="hover:scale-110 transition-all duration-200"
                  >
                    <i class="ri-linkedin-fill"></i>
                  </Link>
                  <Link
                    to="https://github.com/HarshShah35" target="_blank"
                    className="hover:scale-110 transition-all duration-200"
                  >
                    <i class="ri-github-fill"></i>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col  h-fit mx-5 py-4 mb-10 rounded-xl shadow-md transition-all duration-200">
                <img
                  src={img3}
                  alt=""
                  width={"180px"}
                  className="mx-auto items-center h-fit rounded-2xl justify-center"
                />
                <h3 className="font-poppins font-bold text-center">
                  Shubham Raj
                </h3>

                <div className="flex flex-row justify-evenly">
                  <Link
                    to="https://www.instagram.com/shubham_raj027/" target="_blank"
                    className="hover:scale-110 transition-all duration-200"
                  >
                    <i class="ri-instagram-line"></i>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/shubham-raj-694a33252/" target="_blank"
                    className="hover:scale-110 transition-all duration-200"
                  >
                    <i class="ri-linkedin-fill"></i>
                  </Link>
                  <Link
                    to="https://github.com/shubhamraj2002" target="_blank"
                    className="hover:scale-110 transition-all duration-200"
                  >
                    <i class="ri-github-fill"></i>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col  h-fit mx-5 py-4 mb-10 rounded-xl hover:scale-100 shadow-md transition-all duration-200">
                <img
                  src={img4}
                  alt=""
                  width={"180px"}
                  className="mx-auto items-center h-fit rounded-2xl justify-center"
                />
                <h3 className="font-poppins font-bold text-center">
                  Swati Kumari
                </h3>

                <div className="flex flex-row justify-evenly">
                  <Link
                    to="https://www.instagram.com/swati.mawandia__" target="_blank"
                    className="hover:scale-110  transition-all duration-200"
                  >
                    <i class="ri-instagram-line"></i>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/swati-kumari-9b0a65225/" target="_blank"
                    className="hover:scale-110 transition-all duration-200"
                  >
                    <i class="ri-linkedin-fill"></i>
                  </Link>
                  <Link
                    to="https://github.com/4evrswati" target="_blank"
                    className="hover:scale-110 transition-all duration-200"
                  >
                    <i class="ri-github-fill"></i>
                  </Link>
                </div>
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