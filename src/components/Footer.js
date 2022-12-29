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
        <div className="flex flex-row pb-10 border-b border-slate-800">
          <div className=" w-3/12 flex flex-row ">
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
          <div className=" w-3/12 flex flex-row ">
            <div className="pr-3 pt-1">
              <BsTelephone className="text-2xl font-black text-white" />
            </div>
            <div>
              <p className="text-white text-lg font-black mb-2">Reservations</p>
              <p className="text-sm text-gray-300">
                <span className="font-black">Phone: </span>+249 999600611
                <br />
                <span className="font-black">Email: </span> info@example.com
              </p>
            </div>
          </div>
          <div className=" w-3/12 flex flex-row ">
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
          <div className="w-3/12">
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
                <BsLinkedin className=" text-gray-300" />
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
