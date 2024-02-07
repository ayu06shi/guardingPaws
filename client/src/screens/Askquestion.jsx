import React, { useState } from "react";
// import Add from "./Add";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { duration } from "moment";

const Askquestion = () => {

  const naviate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, tags } = e.target;
    const question = {
      question: title.value,
      description: description.value,
      tags: tags.value.split(",")
    };

    console.log(question);

    const res = await axios.post("/api/question/ask-question", question);
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
          Ask a Question
        </h1>
        

        <form 
        onSubmit={handleSubmit} 
        className="form w-full ">
          <div className="title">
            <label className="text-gray-800 font-bold text-start dark:text-white">
              Question Title
            </label>
            <input
              name="title"
              className="mt-2 w-full h-10 px-3 rounded outline-none border-none
                shadow-sm"
              type="text"
            />
          </div>
         
          <div className="desc mt-3">
            <label className="text-gray-800 font-bold text-start dark:text-white">
              Question Description
            </label>
            <textarea
              name="description"
              className="mt-2 w-full h-24 px-3 py-2 rounded outline-none border-none  shadow-sm"
              type="text"
            />
          </div>
         
          <div className="tages mt-3">
            <label className="text-gray-800 font-bold text-start dark:text-white">
              Related Tags
            </label>
            <input
              name="tags"
              placeholder="Enter tags seperated by comma"
              className="mt-2 w-full h-10 px-3 rounded outline-none border-none  shadow-sm"
              type="text"
            />
          </div>
          <button
            type="submit"
            className="mt-8 w-[230px] mx-auto flex items-center gap-2 rounded-md shadow-sm px-8 py-2 cursor-pointer"
          >
            {/* <Share /> */}
            <span className="text-white bg-amber-700 hover:bg-amber-600 p-3 rounded-md text-md text-center transition-all duration-300">Share on Community</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Askquestion;