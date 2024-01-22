import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import dog1 from "../images/dog1.png";
import dogselfie from "../images/dogSelfie.png";

import React from 'react';

function Home() {
  return (
    <div className="overflow-x-hidden relative w-full">
        <div>
            <Navbar/>
        </div>
        
        {/* home page */}
        <div>
            <img className="relative" src={dog1} alt="" height={"110px"} />
        </div>
        <div className="flex">
            <img src={dogselfie} className="relative -left-56" alt="" height="140px" />
            <div>
                <ul className="flex flex-col">
                    <li>
                        How Things Work
                    </li>
                    <li>
                        Charity Lists
                    </li>
                    <li>
                        Pet Advice
                    </li>
                    <li className="font-bold text-yellow">
                        Rehoming Centres
                    </li>
                </ul>
            </div>
        </div>
        
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Home