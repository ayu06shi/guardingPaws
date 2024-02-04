import React, { useState } from "react";
// import Add from "./Add";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { duration } from "moment";

const Reply = () => {

  const naviate = useNavigate();
  const {id} = useParams()
  const [answer, setAnswer] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      `/api/reply/answer/${id}`,
      {answer}
    );
    if (res.status === 201) {
      toast.success("Question added successfully", (duration = 2000));
      setTimeout(() => {
        naviate("/forum");
      }, 2000);
    }
  };

  return (
    <div className="h-full max-w-[1080px] mx-auto md:w-[50%]">
      <Toaster />
      <div
        className="md:mx-12 flex flex-col items-center 
      gap-4 mb-12 border p-4 pb-6 rounded-md bg-yellow-200 
      dark:bg-[#1E212A]  mt-12"
      >
        <h1
          className="text-2xl font-bold text-center
       text-amber-700
        "
        >
          Share your reply
        </h1>
        

        <form 
        onSubmit={handleSubmit} 
        className="form w-full ">   
          <div className="desc mt-3">
            <label className="text-gray-800 font-bold text-start dark:text-white">
              Your Reply
            </label>
            <textarea
              name="description"
              className="mt-2 w-full h-24 px-3 py-2 rounded outline-none border-none  shadow-sm"
              type="text"
              value={answer}
              onChange={(e)=>setAnswer(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-[230px] mx-auto flex gap-2  text-center rounded-md shadow-sm px-8 py-2 cursor-pointer"
          >
            {/* <Share /> */}
            <span className="text-white bg-amber-700 p-3 rounded-md hover:bg-amber-600 text-md text-center transition-all duration-300">Share your reply</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reply;