import React from "react";
import { SlLocationPin } from "react-icons/sl";
import {
  BsTelephone,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer style={{ background: "#1f1f24" }} className="py-11">
      <div className="container mx-auto px-5">
        <div className="flex  flex-row flex-wrap sm:justify-between pb-10 border-b border-slate-800">
          <div className="flex flex-row   mb-6 md:mb-2 w-full sm:w-5/12 md:w-3/12">
            <div className="pr-3 pt-1">
              <SlLocationPin className="text-2xl font-black text-white" />
            </div>
            <div>
              <p className="text-white text-lg font-black mb-2">Address</p>
              <p className="text-sm text-gray-300">
                A108 Adam Street <br />
                New York, NY 535022 - US
              </p>
            </div>
          </div>
          <div className="flex flex-row   mb-6 md:mb-2 w-full sm:w-5/12 md:w-3/12">
            <div className="pr-3 pt-1">
              <BsTelephone className="text-2xl font-black text-white" />
            </div>
            <div>
              <p className="text-white text-lg font-black mb-2">Reservations</p>
              <p className="text-sm text-gray-300">
                <span className="font-black">Phone: </span>+249 999600611
                <br />
                <span className="font-black">Email: </span> maskerbos@gmail.com
              </p>
            </div>
          </div>
          <div className="flex flex-row   mb-2 md:mb-2 w-full sm:w-5/12 md:w-3/12">
            <div className="pr-3 pt-1">
              <AiOutlineClockCircle className="text-2xl font-black text-white" />
            </div>
            <div>
              <p className="text-white text-lg font-black mb-2">
                Opening Hours
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-black">Mon-Sat: </span>11AM - 23PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
          <div className="w-full mb-2 md:mb-2 sm:w-5/12 md:w-3/12">
            <p className=" text-white text-lg font-black mb-2">Follow Us</p>
            <div className="">
              <button className="p-3 rounded-full border border-gray-500 mr-3">
                <BsTwitter className=" text-gray-300" />
              </button>
              <button className="p-3 rounded-full border border-gray-500 mr-3">
                <BsFacebook className=" text-gray-300" />
              </button>
              <button className="p-3 rounded-full border border-gray-500 mr-3">
                <BsInstagram className=" text-gray-300" />
              </button>
              <button className="p-3 rounded-full border border-gray-500 mr-3">
                <a
                  href="https://www.linkedin.com/in/ahmed-mohammed-04a946202?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFibpltPlS5ucBk6x5svvUg%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin className=" text-gray-300" />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="copyright pt-5 flex flex-col justify-center text-gray-300 text-sm">
          <div className="text-center">
            <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
            Copyright{" "}
            <span className="font-black">
              Kava<span className="text-red-600">Food</span>
            </span>
            . All Rights Reserved
          </div>
          <div className="text-center">
            <p>
              Designed by<span className="text-yellow-200"> Masker</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
