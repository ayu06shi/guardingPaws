import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import dogg from "../images/dog2.png";
import img1 from "../images/my pic.jpeg";
import img2 from "../images/harsh.jpeg";
import img3 from "../images/shubham.jpeg";
import img4 from "../images/swati.jpeg";

function About() {
  return (
    <div className="overflow-x-hidden relative w-full">
      <div>
        <Navbar />
      </div>
      <div className="relative">
        {/* <img src={dogg} alt="" height={"80vh"}/> */}
        {/* <div class="absolute px-4 py-3 bg-blobColor top-12 left-7  opacity-60 rounded-lg">
          <h1 class="bg-blobColor font-poppins rounded-md w-[260px] text-xl text-black">
          At Guarding Paws, we are passionate advocates for the well-being and safety of our beloved animal
           companions. Our mission is to provide a comprehensive resource for dog lovers, offering valuable information and services
          to ensure the health, happiness, and protection of your furry friends.
          </h1>
        </div> */}
      </div>
      <div className="relative max-w-[1080px] mx-auto flex lg:flex-row justify-evenly md:flex-col sm:flex-col">
          <div className="relative mx-auto p-8 max-w-[1080px] text-2xl w-2/3 text-center">
          <h3 class=" bg-opacity-30 text-3xl p-3 justify-center items-center rounded-lg w-full text-black">
          At Guarding Paws, we are passionate advocates for the well-being and safety of our beloved 
          <span className="text-orange-500"> animal
           companions</span>.<br/>Our mission is to provide a comprehensive resource for animal lovers, offering valuable information and services
          to ensure the health, happiness, and protection of your furry friends.
          </h3>
            {/* <h1 className="text-black font-semibold text-4xl">Who are we ?</h1> */}
          </div>

      <div className="relative max-w-[1200px] mx-auto h-full">
        <div className="my-auto justify-evenly p-8">
        <h1 className="relative font-poppins text-center text-3xl">Team <span className="text-orange-600">'Vision of Us'</span></h1>

          {/* cards */}
          <div  className="grid m-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-between">
            {/* card 1 */}
            <div className="flex flex-col h-fit mx-5 py-4 mb-10 rounded-xl shadow-md transition-all duration-200">
              <img
                src={img1}
                alt=""
                width={"180px"}
                // height={"100px"}
                className="mx-auto items-center h-fit rounded-2xl justify-center"
              />
              <h3 className="font-poppins font-bold text-center mt-2">Ayushi Nayan</h3>

              <div className="flex flex-row justify-evenly">
                <Link to="https://www.instagram.com/ayu04shi/" className="hover:scale-110 transition-all duration-200">
                  <i class="ri-instagram-line"></i>
                </Link>
                <Link to="https://www.linkedin.com/in/ayushi-nayan-515b7326b/" className="hover:scale-110 transition-all duration-200">
                  <i class="ri-linkedin-fill"></i>
                </Link>
                <Link to="https://github.com/ayu06shi" className="hover:scale-110 transition-all duration-200">
                  <i class="ri-github-fill"></i>
                </Link>
              </div>
            </div>
            <div className="flex flex-col  h-fit mx-5 py-4 mb-10 rounded-xl shadow-md transition-all duration-200">
              <img src={img2} alt="" width={"180px"} height={"100px"} className="mx-auto h-fit items-center rounded-2xl justify-center"/>
              <h3 className="font-poppins font-bold text-center">Harsh Shah</h3>

              <div className="flex flex-row justify-evenly">
                <Link to="https://www.instagram.com/harshshah.3/" className="hover:scale-110 transition-all duration-200">
                  <i class="ri-instagram-line"></i>
                </Link>
                <Link to="https://www.linkedin.com/in/harsh-shah-60b942253/" className="hover:scale-110 transition-all duration-200">
                  <i class="ri-linkedin-fill"></i>
                </Link>
                <Link to="https://github.com/HarshShah35" className="hover:scale-110 transition-all duration-200">
                  <i class="ri-github-fill"></i>
                </Link>
              </div>
            </div>
            <div className="flex flex-col  h-fit mx-5 py-4 mb-10 rounded-xl shadow-md transition-all duration-200">
              <img src={img3} alt="" width={"180px"} className="mx-auto items-center h-fit rounded-2xl justify-center" />
              <h3 className="font-poppins font-bold text-center">Shubham Kumar</h3>

              <div className="flex flex-row justify-evenly">
                <Link to="https://www.instagram.com/shubham_raj027/" className="hover:scale-110 transition-all duration-200">
                  <i class="ri-instagram-line"></i>
                </Link>
                <Link to="https://www.linkedin.com/in/shubham-raj-694a33252/" className="hover:scale-110 transition-all duration-200">
                  <i class="ri-linkedin-fill"></i>
                </Link>
                <Link to="#" className="hover:scale-110 transition-all duration-200">
                  <i class="ri-github-fill"></i>
                </Link>
              </div>
            </div>
            <div className="flex flex-col  h-fit mx-5 py-4 mb-10 rounded-xl hover:scale-100 shadow-md transition-all duration-200">
              <img src={img4} alt="" width={"180px"} className="mx-auto items-center h-fit rounded-2xl justify-center"/>
              <h3 className="font-poppins font-bold text-center">Swati Kumari</h3>

              <div className="flex flex-row justify-evenly">
                <Link to="https://www.instagram.com/swati.mawandia__" className="hover:scale-110  transition-all duration-200">
                  <i class="ri-instagram-line"></i>
                </Link>
                <Link to="https://www.linkedin.com/in/swati-kumari-9b0a65225/" className="hover:scale-110 transition-all duration-200">
                  <i class="ri-linkedin-fill"></i>
                </Link>
                <Link to="https://github.com/4evrswati" className="hover:scale-110 transition-all duration-200">
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