import React, { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xbpz8sf",
        "template_xj1xk6p",
        form.current,
        "G0ItZcmQGRaRkWTqa"
      )
      .then(
        (result) => {
          console.log("Signed up for newsletter");
        },
        (error) => {
          console.log(error.text);
          alert("Signed Up");
        }
      );
    e.target.reset();
  };

  return (
    <div>
      {/* svg icon */}
      <svg
        class="relative bottom-0"
        viewBox="0 0 1425 205.55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M0,17.27l23.75,5.09C47.5,27.38,95,37.57,142.5,39.47s95-4.36,142.5-10.28,95-11.35,142.5-7.4,95,17.43,142.5,24,95,6.25,142.5,5.83,95-.9,142.5-3S950,43,997.5,42.92s95,3.12,142.5,2.88,95-4.11,142.5-3.62,95,5.51,118.75,8L1425,52.62v170.2H0Z"
            fill="#FFFAA2"
          ></path>
          <path
            d="M0,94.56l23.75-6.17C47.5,82.22,95,69.89,142.5,65.2s95-1.64,142.5,4.85S380,86.33,427.5,86.5,522.5,77,570,73.59s95-.66,142.5,1.81,95,4.6,142.5,3.78,95-4.6,142.5-6.58,95-1.89,142.5,1.24,95,9.45,142.5,13.15,95,4.85,118.75,5.35l23.75.57V222.82H0Z"
            fill="#FFF37B"
          ></path>
          <path
            d="M0,134,23.75,132C47.5,129.91,95,125.8,142.5,125.39s95,2.88,142.5,5.75,95,5.35,142.5,4,95-6.58,142.5-8.06,95,.66,142.5-.41,95-5.51,142.5-9.21,95-6.66,142.5-5.83,95,5.42,142.5,9.86,95,8.47,142.5,9.05,95-2.47,118.75-4L1425,125v97.84H0Z"
            fill="#FFD466"
          ></path>
          {/* <path d="M0,178.42l23.75-1.64c23.75-1.65,71.25-4.94,118.75-5.59s95,1.23,142.5,2.71,95,2.63,142.5,4.11,95,3.45,142.5,2.88,95-3.54,142.5-8.8,95-12.58,142.5-13.57,95,4.53,142.5,8.23,95,5.67,142.5,4,95-6.91,142.5-9.79,95-3.37,118.75-3.7L1425,157v65.78H0Z" fill="#27272a"></path> */}
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="1425" height="444" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
      <div className="bg-yellow-main">
        {/* social media icons */}
        <div className="mb-2 flex justify-center sm:items-center">
          <Link
            to="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-black uppercase leading-normal text-blacktransition duration-150 ease-in-out hover:bg-white hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-full w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </Link>
          {/* data-te-ripple-init
        data-te-ripple-color="light" */}
          <Link
            to="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-black uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-white hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-full w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </Link>

          <Link
            to="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-black uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-white hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-full w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              />
            </svg>
          </Link>

          <Link
            to="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-black uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-white hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-full w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </Link>

          <Link
            to="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-black uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-white hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-full w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </Link>

          <Link
            to="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-black uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-white hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-full w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>
        </div>
        {/* <div className="relative w-[1080px] flex justify-between sm:flex sm:flex-col-reverse"> */}

        {/* keep exploring div */}
        <div className="relative flex flex-col py-3 px-auto mx-auto w-1/4">
          <h4 className="font-poppins font-semibold py-2 mx-auto">
            Keep exploring
          </h4>
          <ul className="flex flex-col text-center">
            <li className="font-poppins mx-auto py-1">
              <Link
                to={"/"}
                className="hover:underline transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li className="font-poppins mx-auto py-1">
              <Link
                to={"/about"}
                className="hover:underline transition-all duration-300"
              >
                Who are we?
              </Link>
            </li>
            <li className="font-poppins mx-auto py-1">
              <Link
                to={"/signup"}
                className="hover:underline transition-all duration-300"
              >
                Donate
              </Link>
            </li>
          </ul>
        </div>
        {/* newsletter section */}
        <div className="relative flex flex-col flex-grow py-2 px-10 mx-2">
          <h4 className="font-poppins font-semibold py-3 mx-auto">
            Stay in the Know
          </h4>
          <p className="relative font-poppins mb-3 mx-auto">
            To stay in the loop of guardingPaws.com's offerings and mindfulness
            tips, signup for our Newsletter here.
          </p>
          <div>
            <form
              ref={form}
              action="submit"
              onSubmit={sendEmail}
              className="flex flex-grow justify-between"
            >
              <div className="flex flex-grow justify-center items-center gap-4 md:grid-cols-3">
                {/* <div className="md:mb-6 md:ml-auto">
                  <p className="">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div> */}

                {/* <!-- Newsletter sign-up input field --> */}
                <div
                  className="relative md:mb-6 mx-auto"
                  data-te-input-wrapper-init
                >
                  <input
                    type="email"
                    name="user_email"
                    className="peer block bg-amber-300 min-h-[auto] w-full border-black bg-transparent font-poppins rounded-md py-[0.32rem] leading-[1.4] text-black outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="email"
                    required
                    // placeholder="Email address"
                  />
                  <label
                    for="exampleFormControlInput1"
                    className="pointer-events-none absolute top-0 mb-0 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-black peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-black"
                  >
                    Email Address
                  </label>
                </div>

                {/* <!-- Newsletter sign-up submit button --> */}
                <div className="mb-6 md:mr-auto">
                  <button
                    type="submit"
                    className="inline-block rounded border-2 border-black px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-opacity-10 hover:underline  focus:text-black  active:underline dark:hover:bg-black dark:hover:bg-opacity-10"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* </div> */}
        {/* <div className="relative flex flex-col py-10 px-20 mr-20 w-auto">
            <h4 className="font-poppins  font-semibold py-2">Connect</h4>
            <ul className="flex flex-row">
              <li className="px-2 py-6">
                <Link to={"mailto:"}>
                  <i class="ri-mail-line"></i>
                </Link>
              </li>
              <li className="px-2 py-6">
                <Link to="#">
                  <i class="ri-phone-line"></i>
                </Link>
              </li>
            </ul>
            <ul className="flex flex-row">
              <li className="px-2">
                <Link to="#">
                  <i class="ri-instagram-line"></i>
                </Link>
              </li>
              <li className="px-2">
                <Link to="#">
                  <i class="ri-linkedin-fill"></i>
                </Link>
              </li>
              <li className="px-2">
                <Link to="#">
                  <i class="ri-twitter-x-line"></i>
                </Link>
              </li>
            </ul>
          </div> */}
        {/* grid grid-cols-4 md:grid-cols-3 vsm:grid-cols-2 */}
        {/* <div className="relative w-[1080px] flex flex-row"> */}

        {/* <div className="relative flex flex-col py-10 px-12 mx-8 w-auto">
          <form ref={form} action="submit" onSubmit={sendEmail} className="text-right text-wrap h-max w-100">
          <label
            htmlFor="email"
            className="relative font-poppins font-semibold py-2 text-center text-wrap"
            aria-placeholder=""
          >Email Address</label>
          <input type="email" name="user_email" placeholder="Email" className="my-4 text-center rounded-full" required/>
          <button type="submit" className=" hover:bg-gray-100 text-black font-semibold py-2 px-8 pr-20 text-center rounded-full">Signup</button>
          </form>
        </div> */}
        {/* </div> */}

        <span className="flex justify-center items-center font-poppins py-2 ">
          &copy; 2024 Guarding Paws. All Rights Reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;
