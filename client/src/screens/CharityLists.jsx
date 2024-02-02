import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const CharityLists = () => {

  const [lists, setLists] = useState([])

  useEffect(() => {
    const fetchCharityData = async() => {
      try {
        const config = {
          headers: {
            "Content-type": "application/json"
          }
        }

        const res = await axios.get('/api/charity/charity-lists', config)
        setLists(res.data)

      } catch (error) {
        console.log("Error in fetching Lists : ", error);
      }
    }

    fetchCharityData();
  }, [])

  const donateHandler = async({name, amount}) => {
    try {
      const res = await axios.post("/api/payment/donate", { name, amount });
      console.log(res.data);
      // Handle success, e.g., show a success message to the user
    } catch (error) {
      console.error("Error in donateHandler:", error);
      // Handle the error, e.g., show an error message to the user
    }
  }

  return (
    <div>
       <div>
         <Navbar />
       </div>
       <div className="flex flex-wrap mt-16 relative max-w-[1080px] mx-auto items-center justify-between mb-28">
         {/* <h3 className="font-poppins text-3xl justify-center items-center">
           Here are some charity suggestions
         </h3> */}
         <div class="w-full justify-center items-center ml-8 p-6 text-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-10 gap-x-4 relative z-[100]">
           {/* <!--item 1--> */}
           <div class="relative flex items-center z-0">
             <h2 class="text-deepBlueHead font-mullish font-extrabold text-4xl leading-[3.375rem]">
             Presenting a selection of
               <span className="text-amber-500"> Charitable</span> <br />
               recommendations for your consideration!
             </h2>
           </div>
           {/* <!--card 1--> */}
           {
              lists.map((list) => {
                return (
                  <div
            class="p-7 w-full bg-[url(./images/bg1.png)] max-h-fit cursor-pointer
              bg-cover hover:scale-105 transition-all duration-200
              hover:bg-[url(./images/bg.png)]
              bg-white rounded-lg" key={list._id}
          >
            <h3 class="font-mullish text-3xl font-bold pt-4">{list.name}</h3>
            <h4 className="text-xl font-bold pt-3">Mission</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              {list.mission}
            </p>
            <h4 className="text-xl font-bold pt-3">Impact</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              {list.impact}
            </p>
            <h4 className="text-xl font-bold pt-3">Success Story</h4>
            <p class="font-mullish py-3 text-grayText leading-normal">
              {list.successStory}
            </p>
            <div class="flex flex-row items-center cursor-pointer group">
              <button
                onClick={() => donateHandler({name: list.name, amount: 100})}
                class="font-mullish font-bold bg-yellow-main p-2 rounded-md hover:text-white
                      transition-all duration-200"
              >
                Donate
              </button>
             
            </div>
          </div>
                )
              })
           }
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default CharityLists