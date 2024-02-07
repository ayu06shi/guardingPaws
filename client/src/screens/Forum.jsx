import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Askquestion from "./Askquestion";
// import Accordion from "@mui/material/Accordion";
// import AccordionActions from "@mui/material/AccordionActions";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Button from "@mui/material/Button";

const Forum = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      {/* <div>
        <Askquestion/>
      </div> */}
      {/* item-center text-center justify-center */}

      <section class="max-w-[1080px]  text-gray-600 body-font mx-auto overflow-hidden">
        <div className=" container px-5 py-24 mx-auto ">
          <div className="my-5">
            {/* to add below 2 */}
            <div className="flex lg:flex-row md:flex-col -mt-3 md:text-center justify-between">
              <p className="text-lg text-black md:mx-auto mb-3 w-[60%]">
                Welcome to the community forum of <span className="text-xl text-amber-700"> Guarding Paws!</span><br />
                Get ready to dive into insightful discussions, share your
                experiences, and explore the collective wisdom of this amazing
                community. Remember, this space is all about positive vibes,
                open minds, and a sprinkle of fun.
              </p>
              <Link
                to="/ask"
                className="relative text-2xl m-2 my-6 h-fit text-center p-2 rounded-md bg-yellow-200 hover:bg-yellow-main transition-all duration-300"
              >
                Ask a Question
              </Link>
              <div 
              // onClick={handleClick}
                className="relative text-2xl h-fit my-6 text-center p-2 rounded-md bg-yellow-200 hover:bg-yellow-main transition-all duration-300"
              >
                My QnA
              </div>
            </div>
          </div>
          <div class="my-8  divide-y-2 divide-gray-100">
            <div class="py-8 flex md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 my-2 gap-y-2 flex-shrink-0 flex flex-col">
                <span class="font-semibold text-md mx-auto text-gray-700">
                  user name
                </span>
                <span class="mt-1 text-gray-500 text-sm mx-auto">
                  12 Jun 2019 time
                </span>
                <div className="upvote mx-auto">
                  <svg
                    // onClick={handleClick1}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 m-2 bg-yellow-200 hover:bg-yellow-main rounded-full md:w-5 md:h-5 cursor-pointer transition-all duration-300 dark:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                    />
                  </svg>
                </div>
                <div className="downvote mx-auto">
                  <svg
                    // onClick={handleClick2}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 m-2 md:w-5 md:h-5 bg-yellow-200 hover:bg-yellow-main rounded-full transition-all duration-300  cursor-pointer dark:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                    />
                  </svg>
                </div>
              </div>
              <div class="md:flex-grow  border p-6 shadow-sm gap-y-10 rounded-lg">
                <div className="flex justify-between">
                  <h2 class="text-2xl font-medium font-poppins text-gray-900 title-font mb-2">
                    Question title
                  </h2>

                  <Link
                    to="/reply"
                    className="text-lg p-4 rounded-md bg-yellow-200 hover:bg-yellow-main transition-all duration-300"
                  >
                    <h3>Reply</h3>
                  </Link>
                </div>
                <p class="leading-relaxed font-poppins my-3 mb-4">
                  question description:
                  hbsbktcyfyuosioijdfcbruri7shbxotifjkycbtg fvxmcbtg
                  hixcbgukyvhjb duhvjy heghjxhybgydjkbyxgnxahjbcvfgh
                </p>

                <div className="flex">
                  <h4 className="bg-yellow-main mx-2 mb-3 px-2 rounded-lg">tags</h4>
                  <h4 className="bg-yellow-main mb-3 px-2 rounded-lg">tags</h4>
                </div>
                

                <div className="wrapper">
                  <div className="tab mb-3 bg-white px-5 py-3 shadow-lg rounded-md relative">
                    <input
                      type="radio"
                      name="faq"
                      id="faq1"
                      className="appearance-none peer"
                    />
                    <label
                      for="faq1"
                      className="flex items-center text-lg font-semibold after:absolute after:content-['+'] after:right-5 after:text-2xl
                      after:text-gray-400 hover:after:text-gray-900 peer-checked:after:transform peer-checked:after:rotate-45"
                    >
                      {/* <h2 className="mr-2 h-8 w-8 bg-yellow-main grid place-items-center text-white">
                        Reply 1
                      </h2> */}
                      <h3>Reply 1</h3>
                    </label>
                    <div className="answer mt-5 h-0 overflow-hidden transition ease-in-out peer-checked:h-full">
                      <div className="flex justify-between">
                        <p className="w-[70%]">
                          this is the first reply by user 1
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrapper">
                  <div className="tab mb-3 bg-white px-5 py-3 shadow-lg rounded-md relative">
                    <input
                      type="radio"
                      name="faq"
                      id="faq2"
                      className="appearance-none peer"
                    />
                    <label
                      for="faq2"
                      className="flex items-center text-lg font-semibold after:absolute after:content-['+'] after:right-5 after:text-2xl
                      safter:text-gray-400 hover:after:text-gray-900 peer-checked:after:transform peer-checked:after:rotate-45"
                    >
                      {/* <h2 className="mr-2 h-8 w-8 justify-between bg-yellow-main grid place-items-center text-white rounded-full">
                        Reply 2
                      </h2> */}
                      <h3>Reply 2</h3>
                    </label>
                    <div className="answer mt-5 h-0 overflow-hidden transition ease-in-out peer-checked:h-full">
                      <div className="flex justify-between">
                        <p className="w-[70%]">
                          this is the first reply by user 2
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Forum;
