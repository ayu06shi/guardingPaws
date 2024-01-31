import React, {useRef} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_xbpz8sf', 'template_y8oh53v', form.current, 'G0ItZcmQGRaRkWTqa')
          .then((result) => {
              console.log(result.text);
              alert("Message sent");
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

  return (
    <section className=''>
      <div>
        <Navbar />
      </div>
      <div className="relative max-w-[1080px] mt-8 mx-auto container flex lg:flex-row justify-between mb-6 sm:flex-col">
        <div className="flex flex-col lg:w-1/2 text-center bg-[url(./images/bg-contact.png)] bg-contain bg-no-repeat bg-center bg-opacity-10 justify-between">
            <h2 className="w-[180px] text-6xl font-poppins mx-auto mb-10 text-center">
              Get in touch
            </h2>
            <div className="flex flex-col gap-y-2 sm:text-center sm:mb-8">
              <span className="text-2xl font-bold font-poppins">
                Guarding Paws
              </span>
              <p className="font-poppins">guardingpaws@gmail.com</p>
              <p className="font-poppins">Kolkata, West Bengal</p>
              <p className="font-poppins">123456789</p>
            </div>
        </div>
        <form ref={form} onSubmit={sendEmail} action="submit" className="relative w-1/2 mx-auto flex flex-col gap-y-3">
          <input
            type="text"
            placeholder="Full Name"
            name="user_name"
            required
            className="placeholder-black border border-yellow-main px-2 rounded-md"
          />

          <input
            type="email"
            placeholder="Email"
            name="user_email"
            required
            className="placeholder-black border border-yellow-main px-2 rounded-md"
          />

          <input
            type="text"
            placeholder="Subject"
            name="subject"
            required
            className="placeholder-black border border-yellow-main px-2 rounded-md"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            cols="30"
            rows="10"
            className="placeholder-black border border-yellow-main px-2 rounded-md"
          ></textarea>

          <button type="submit" className="bg-yellow-main rounded-md font-poppins hover:text-yellow-main transition-all duration-200">
            Send Message
          </button>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
