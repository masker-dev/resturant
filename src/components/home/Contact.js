import React from "react";
import { BsMap, BsTelephone, BsShare } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  window.location.pathname === "/contact"
    ? (document.title = "Contact")
    : (document.title = "Home");
  return (
    <section
      className={`contact pb-20 ${
        window.location.pathname === "/contact" ? "pt-28" : "pt-20"
      }`}
    >
      <div className="container mx-auto px-5">
        <div className="title mb-10 text-center" data-aos="fade-up">
          <p className="text-sm text-slate-500 mb-4">CONTACT</p>
          <h3 className="text-5xl atamicfont ">
            NEED HELP? <span className="text-red-600 ">CONTACT US </span>
          </h3>
        </div>
        <div className="map" data-aos="fade-up">
          <iframe
            title="ourLocation"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.8326522111747!2d32.51726698937884!3d15.598551039872087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x168e8e12ddb31bf5%3A0x477d25efd4af7243!2z2KXYs9iq2KfYryDYp9mE2K7Ysdi32YjZhSDYp9mE2K_ZkdmP2YjZhNmK2ZE!5e0!3m2!1sar!2s!4v1671956532161!5m2!1sar!2s"
            height="450"
            className="border-none w-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="informations py-5 flex flex-row flex-wrap justify-between ">
          <div
            className="bg-gray-100 flex flex-row p-5 mb-6"
            data-aos="zoom-in-right"
          >
            <div className="flex w-16 h-16 rounded-full bg-red-600 mr-5 justify-center items-center">
              <BsMap className="text-white text-2xl" />
            </div>
            <div className="grow ">
              <h3 className="text-xl text-gray-500 font-black">Our Address</h3>
              <p className="font-thin">A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>
          <div
            className="bg-gray-100 flex flex-row p-5 mb-6"
            data-aos="zoom-in-left"
          >
            <div className="flex p-5 rounded-full bg-red-600 mr-5 justify-center items-center">
              <AiOutlineMail className="text-white text-2xl" />
            </div>
            <div className="grow ">
              <h3 className="text-xl text-gray-500 font-black">Email Us</h3>
              <p className="font-thin">contact@example.com</p>
            </div>
          </div>
          <div
            className="bg-gray-100 flex flex-row p-5 mb-6"
            data-aos="zoom-in-right"
          >
            <div className="flex p-5 rounded-full bg-red-600 mr-5 justify-center items-center">
              <BsTelephone className="text-white text-2xl" />
            </div>
            <div className="grow ">
              <h3 className="text-xl text-gray-500 font-black">Call Us</h3>
              <p className="font-thin">(249)+999600611</p>
            </div>
          </div>
          <div
            className="bg-gray-100 flex flex-row p-5 mb-6"
            data-aos="zoom-in-left"
          >
            <div className="flex p-5 rounded-full bg-red-600 mr-5 justify-center items-center">
              <BsShare className="text-white text-2xl" />
            </div>
            <div className="grow ">
              <h3 className="text-xl text-gray-500 font-black">
                Opening Hours
              </h3>
              <p className="font-thin">
                <strong>Mon-Sat: </strong>11AM - 23PM;<strong> Sunday:</strong>
                Closed
              </p>
            </div>
          </div>
        </div>

        <div className="formcont shadow-lg p-5">
          <form className="flex flex-col">
            <div className="flex flex-col md:flex-row mb-5" data-aos="fade-up">
              <div className="w-full mb-5 md:mb-0 md:w-3/6 md:mr-3">
                <input
                  className="border border-solid w-full p-3 "
                  type="text"
                  name="yourName"
                  placeholder="Your Name"
                />
              </div>
              <div className="w-full md:w-3/6 md:ml-3">
                <input
                  className="border border-solid w-full p-3 "
                  type="text"
                  name="yourEmail"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="mb-5" data-aos="fade-down">
              <input
                className="border border-solid w-full p-3 "
                type="text"
                name="subject"
                placeholder="Subject"
              />
            </div>
            <div className="mb-5" data-aos="fade-down">
              <textarea
                className="border border-solid w-full p-3 "
                rows={5}
                name="message"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                className=" w-44 py-3 rounded-full bg-red-600 text-white"
                data-aos="flip-left"
              >
                Book a Table
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
