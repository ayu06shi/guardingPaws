import React, {useRef} from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_xbpz8sf', 'template_xj1xk6p', form.current, 'G0ItZcmQGRaRkWTqa')
    .then((result) => {
      console.log("Signed up for newsletter");
    }, (error) => {
      console.log(error.text);
      alert("Signed Up");
    });
    e.target.reset();
  }

  return (
    <div className="bg-yellow-main">
      <div className="relative w-[1080px] grid grid-cols-4 md:grid-cols-3 vsm:grid-cols-2 ">
        <div className="relative flex flex-col py-10 px-10">
          <h4 className="font-poppins font-semibold py-2">Keep exploring</h4>
          <ul className="flex flex-col">
            <li className="font-poppins text-black">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="font-poppins text-black">
              <Link to={"/about"}>Who are we?</Link>
            </li>
            <li className="font-poppins text-black">
              <Link to={"/signup"}>Donate</Link>
            </li>
          </ul>
        </div>
        <div className="relative flex flex-col py-10 px-12">
          <h4 className="font-poppins font-semibold py-2">Connect</h4>
          <ul className="flex flex-row">
            <li className="px-1">
              <Link to={"mailto:"}>
                <i class="ri-mail-line"></i>
              </Link>
            </li>
            <li className="px-1">
              <Link to="#">
                <i class="ri-phone-line"></i>
              </Link>
            </li>
          </ul>
          <ul className="flex flex-row">
            <li className="px-1">
              <Link to="#">
                <i class="ri-instagram-line"></i>
              </Link>
            </li>
            <li className="px-1">
            <Link to="#">
              <i class="ri-linkedin-fill"></i>
              </Link>
            </li>
            <li className="px-1">
            <Link to="#">
              <i class="ri-twitter-x-line"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="relative flex flex-col py-10 px-12">
          <h4 className="font-poppins font-semibold py-2">Stay in the Know</h4>
          <p className="relative font-poppins">
            To stay in the loop of guardingPaws.com's offerings and mindfulness
            tips, signup for our Newsletter here.
          </p>
        </div>

        <div className="relative flex flex-col py-10 px-12">
          <form ref={form} action="submit" onSubmit={sendEmail}>
          {/* <label
            htmlFor="email"
            className="relative font-poppins font-semibold"
            aria-placeholder=""
          >
            Email Address
          </label> */}
          <input type="email" name="user_email" placeholder="Email Address" className="rounded-md px-1" required/>
          <button type="submit" className="flex float-start hover:underline transition-all duration-200">Signup</button>
          </form>
        </div>
      </div>

      <span className="flex justify-center items-center font-poppins">
        &copy; 2024 Guarding Paws. All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;
