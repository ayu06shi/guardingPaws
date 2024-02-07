import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import dog1 from "../images/dog11.png";
// import dogselfie from "../images/dogSelfie.png";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Process from "./Process";
import { useAuth } from "../context/auth";
import blob from "../images/blob.png";
import axios from "axios";
// import Foooter from "../components/Foooter";

function Home() {
  const [auth, setAuth] = useAuth([]);
  const [charityOfWeek, setCharityOfWeek] = useState({})

  useEffect(() => {
    const getCharityOfWeek = async() => {
      try {
        const config = {
          headers: {
            "Content-type": "application/json"
          }
        }

        const res = await axios.get('/api/charity/charity-of-week', config)
        console.log(res.data)
        setCharityOfWeek(res.data.topCharity)

      } catch (error) {
        console.log("Error in fetching Lists : ", error);
      }
    }
    getCharityOfWeek()
  },[])

  return (
    <div className="overflow-x-hidden relative w-full">
      <div>
        <Navbar />
      </div>
  
      <div className="relative flex flex-row">
        <img className="relative z-0 w-[100vw] blobsm:opacity-85 lg:bloc" src={dog1} alt="" />
       
        {/* m-6 p-8 px-4 py-3 bg-blobColor rounded-lg opacity-65 z-0 */}
        <div className="absolute -left-[60px] -top-[20px]">
        <div className="absolute inset-0 z-10 p-20 h-full font-poppins rounded-md lg:w-[540px] blobmd:w-[450px] blobvssm:w-[450px] blobsm:hidden blobvssm:block blobsm:text-md text-center lg:text-lg">
            {/* <div className="absolute w-full"> */}
            Welcome to<br/> <strong>Guarding Paws!</strong><br/> Here, we champion the welfare,
            protection, and advocacy for our beloved furry friends.<br/><br/> Our
            platform is dedicated to raising awareness, providing resources, and 
            offering support for those passionate about ensuring the safety and
            well-being of animals everywhere.
            {/* </div> */}
          </div>
        <img src={blob} alt="blob" className="z-5 blobvssm:block w-[50%] blobsm:hidden group"/>
          
        </div>
      </div>

      <div className="flex flex-col mt-4 mb-4">
        <div className="max-w-[1080px] relative flex md:w-[600px] sm:flex-col justify-evenly mx-auto">
          <ul className="relative w-full justify-evenly flex flex-row gap-y-6 sm:flex-col mt-7 mb-10">
            <li className="flex flex-row justify-between sm:justify-center gap-x-3">
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
                to={auth.user ? "/donate" : "/login"}
                className="relative font-poppins text-md z-10 hover:underline"
              >
                <strong>Donation History</strong>
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
                <strong>Community Forum</strong>
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
        <div className=" relative flex flex-wrap max-w-[1080px] mx-auto justify-center items-center text-center">
          <h3 className="text-4xl text-center font-poppins mb-5 bg-yellow-main px-2 rounded-md">
            Charity of the week
          </h3>
          <div>
            {/*  */}
            <div
              class="p-7 w-full bg-[url(./images/bg1.png)] max-h-fit cursor-pointer
              bg-cover transition-all duration-200
              bg-white hover:scale-105 rounded-lg mx-auto overflow-hidden"
            >
              <h3 class="font-poppins text-3xl font-bold pt-4">{charityOfWeek.name}</h3>
              <h4 className="text-xl font-bold pt-3">Mission</h4>
              <p class="font-poppins py-3 text-grayText leading-normal">
                {charityOfWeek.mission}
              </p>
              <h4 className="text-xl font-bold pt-3">Impact</h4>
              <p class="font-poppins py-3 text-grayText leading-normal">
                {charityOfWeek.impact}
              </p>
              <h4 className="text-xl font-bold pt-3">Success Story</h4>
              <p class="font-poppins py-3 text-grayText leading-normal">
                {charityOfWeek.successStory}
              </p>
              {/* <div className="flex flex-row justify-center items-center cursor-pointer group">
                <Link
                  to="/donate"
                  class="font-poppins font-bold bg-yellow-main p-2 rounded-md hover:text-white
                      transition-all duration-200"
                >
                  Donate
                </Link>
              </div> */}
            </div>
          </div>
        </div>
        <div>
          <Process />
        </div>
        <div className="flex flex-wrap relative max-w-[1080px] mx-auto gap-y-4 mb-12 text-center justify-between">
          <h3 className="text-4xl font-poppins font-bold mx-auto">Join Us</h3>
          <p className="text-2xl font-poppins">
            Guarding Paws is more than just a website; it's a community of
            animal lovers committed to making a difference. Join us in
            supporting and promoting the well-being of animals worldwide.
            Together, we can create a world where all creatures thrive.
          </p>
          <Link
            to="/contact"
            className="font-poppins text-2xl mx-auto font-bold bg-yellow-main p-2 rounded-md hover:text-white
            items-center justify-center transition-all duration-200"
          >
            Join
          </Link>
        </div>
      </div>
      {/* <div>
        {/* <Foooter/> 
      </div> */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;