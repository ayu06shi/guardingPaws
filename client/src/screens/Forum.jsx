import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
      <section class="max-w-[1080px] text-gray-600 body-font mx-auto overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="-my-8 divide-y-2 divide-gray-100">
            <div class="py-8 flex md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 my-2 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font mx-auto text-gray-700">
                  user name
                </span>
                <span class="mt-1 text-gray-500 text-sm mx-auto">
                  12 Jun 2019 time
                </span>
                <div className="upvote mx-auto">
                  <svg
                    // onClick={handleClick}
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
                    // onClick={handleClick}
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
                <h2 class="text-2xl font-medium font-poppins text-gray-900 title-font mb-2">
                  Question title
                </h2>
                <p class="leading-relaxed font-poppins my-3 mb-4">
                  question description:
                  hbsbktcyfyuosioijdfcbruri7shbxotifjkycbtg fvxmcbtg
                  hixcbgukyvhjb duhvjy heghjxhybgydjkbyxgnxahjbcvfgh
                </p>

                {/* <div className="replies">
                  <div className="flex">
                    <h3 className="text-lg font-bold font-poppins">Replies</h3>

                    <svg
                      className="w-6 h-6 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div> */}

                {/* <div
                  id="accordion-flush"
                  data-accordion="collapse"
                  data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                  data-inactive-classes="text-gray-500 dark:text-gray-400"
                >
                  <h2 id="accordion-flush-heading-1">
                    <button
                      type="button"
                      class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                      data-accordion-target="#accordion-flush-body-1"
                      aria-expanded="true"
                      aria-controls="accordion-flush-body-1"
                    >
                      <span>What is Flowbite?</span>
                      <svg
                        data-accordion-icon
                        class="w-3 h-3 rotate-180 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-flush-body-1"
                    class="hidden"
                    aria-labelledby="accordion-flush-heading-1"
                  >
                    <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                      <p class="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is an open-source library of interactive
                        components built on top of Tailwind CSS including
                        buttons, dropdowns, modals, navbars, and more.
                      </p>
                      <p class="text-gray-500 dark:text-gray-400">
                        Check out this guide to learn how to{" "}
                        <a
                          href="/docs/getting-started/introduction/"
                          class="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          get started
                        </a>{" "}
                        and start developing websites even faster with
                        components on top of Tailwind CSS.
                      </p>
                    </div>
                  </div>
                  <h2 id="accordion-flush-heading-2">
                    <button
                      type="button"
                      class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                      data-accordion-target="#accordion-flush-body-2"
                      aria-expanded="false"
                      aria-controls="accordion-flush-body-2"
                    >
                      <span>Is there a Figma file available?</span>
                      <svg
                        data-accordion-icon
                        class="w-3 h-3 rotate-180 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-flush-body-2"
                    class="hidden"
                    aria-labelledby="accordion-flush-heading-2"
                  >
                    <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                      <p class="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is first conceptualized and designed using the
                        Figma software so everything you see in the library has
                        a design equivalent in our Figma file.
                      </p>
                      <p class="text-gray-500 dark:text-gray-400">
                        Check out the{" "}
                        <a
                          href="https://flowbite.com/figma/"
                          class="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Figma design system
                        </a>{" "}
                        based on the utility classes from Tailwind CSS and
                        components from Flowbite.
                      </p>
                    </div>
                  </div>
                  <h2 id="accordion-flush-heading-3">
                    <button
                      type="button"
                      class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                      data-accordion-target="#accordion-flush-body-3"
                      aria-expanded="false"
                      aria-controls="accordion-flush-body-3"
                    >
                      <span>
                        What are the differences between Flowbite and Tailwind
                        UI?
                      </span>
                      <svg
                        data-accordion-icon
                        class="w-3 h-3 rotate-180 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-flush-body-3"
                    class="hidden"
                    aria-labelledby="accordion-flush-heading-3"
                  >
                    <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                      <p class="mb-2 text-gray-500 dark:text-gray-400">
                        The main difference is that the core components from
                        Flowbite are open source under the MIT license, whereas
                        Tailwind UI is a paid product. Another difference is
                        that Flowbite relies on smaller and standalone
                        components, whereas Tailwind UI offers sections of
                        pages.
                      </p>
                      <p class="mb-2 text-gray-500 dark:text-gray-400">
                        However, we actually recommend using both Flowbite,
                        Flowbite Pro, and even Tailwind UI as there is no
                        technical reason stopping you from using the best of two
                        worlds.
                      </p>
                      <p class="mb-2 text-gray-500 dark:text-gray-400">
                        Learn more about these technologies:
                      </p>
                      <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                        <li>
                          <a
                            href="https://flowbite.com/pro/"
                            class="text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Flowbite Pro
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tailwindui.com/"
                            rel="nofollow"
                            class="text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Tailwind UI
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                {/* <div>
                  <div class="relative mb-3">
                    <h6 class="mb-0">
                      <button
                        class="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                        data-collapse-target="collapse-1"
                      >
                        <span>What is Material Tailwind?</span>
                        <i class="absolute right-0 pt-1 text-xs fa fa-plus group-open:opacity-0"></i>
                        <i class="absolute right-0 pt-1 text-xs opacity-0 fa fa-minus group-open:opacity-100"></i>
                      </button>
                    </h6>
                    <div
                      data-collapse="collapse-1"
                      id="collapse-1"
                      class="h-0 overflow-hidden transition-all duration-300 ease-in-out"
                    >
                      <div class="p-4 text-sm leading-normal text-blue-gray-500/80">
                        We're not always in the position that we want to be at.
                        We're constantly growing. We're constantly making
                        mistakes. We're constantly trying to express ourselves
                        and actualize our dreams.
                      </div>
                    </div>
                  </div>
                  <div class="relative mb-3">
                    <h6 class="mb-0">
                      <button
                        class="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                        data-collapse-target="collapse-2"
                      >
                        <span>How to use Material Tailwind?</span>
                        <i class="absolute right-0 pt-1 text-xs fa fa-plus group-open:opacity-0"></i>
                        <i class="absolute right-0 pt-1 text-xs opacity-0 fa fa-minus group-open:opacity-100"></i>
                      </button>
                    </h6>
                    <div
                      data-collapse="collapse-2"
                      class="h-0 overflow-hidden transition-all duration-300 ease-in-out"
                    >
                      <div class="p-4 text-sm leading-normal text-blue-gray-500/80">
                        We're not always in the position that we want to be at.
                        We're constantly growing. We're constantly making
                        mistakes. We're constantly trying to express ourselves
                        and actualize our dreams.
                      </div>
                    </div>
                  </div>
                  <div class="relative mb-3">
                    <h6 class="mb-0">
                      <button
                        class="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                        data-collapse-target="collapse-3"
                      >
                        <span>What can I do with Material Tailwind?</span>
                        <i class="absolute right-0 pt-1 text-xs fa fa-plus group-open:opacity-0"></i>
                        <i class="absolute right-0 pt-1 text-xs opacity-0 fa fa-minus group-open:opacity-100"></i>
                      </button>
                    </h6>
                    <div
                      data-collapse="collapse-3"
                      class="h-0 overflow-hidden transition-all duration-300 ease-in-out"
                    >
                      <div class="p-4 text-sm leading-normal text-blue-gray-500/80">
                        We're not always in the position that we want to be at.
                        We're constantly growing. We're constantly making
                        mistakes. We're constantly trying to express ourselves
                        and actualize our dreams.
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* <div className="bg-gray-200 grid place-items-center h-[100vh]"> */}
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
                      <h2 className="mr-2 h-8 w-8 justify-between bg-yellow-main grid place-items-center text-white rounded-full">
                      Reply 1
                      </h2>
                      <h3>User name</h3>

                    </label>
                    <div className="answer mt-5 h-0 overflow-hidden transition ease-in-out peer-checked:h-full">
                      <div className="flex justify-between">
                        <p className="w-[70%]">this is the first reply by user 1</p>
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
                      <h2 className="mr-2 h-8 w-8 justify-between bg-yellow-main grid place-items-center text-white rounded-full">
                      Reply 2
                      </h2>
                      <h3>User name</h3>

                    </label>
                    <div className="answer mt-5 h-0 overflow-hidden transition ease-in-out peer-checked:h-full">
                      <div className="flex justify-between">
                        <p className="w-[70%]">this is the first reply by user 2</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}

              {/* <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Accordion 1
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    Accordion 2
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    Accordion Actions
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                  <AccordionActions>
                    <Button>Cancel</Button>
                    <Button>Agree</Button>
                  </AccordionActions>
                </Accordion>
              </div> */}
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
