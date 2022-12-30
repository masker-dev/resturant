import React, { useState } from "react";
import rest from "../../images/rest.jpg";
import { BsCheck2All } from "react-icons/bs";
import nakhp from "../../images/nakhp.jpg";
import { FaPlay } from "react-icons/fa";
import IframeVid from "./IframeVid";

const About = () => {
  if (window.location.pathname !== "/") window.scrollTo(0, 0);

  const [vidState, setVidState] = useState(false);
  if (window.location.pathname === "/about") {
    document.title = "About";
    window.scrollTo(0, 0);
  } else {
    document.title = "Home";
  }
  const showIframe = () => {
    console.log("you clicked me");
    setVidState(true);
  };

  return (
    <section
      className={`pb-14 ${
        window.location.pathname === "/about" ? "pt-28" : "pt-14"
      }`}
    >
      <div className="title mb-10" data-aos="fade-up">
        <p className="text-sm text-gray-700 text-center mb-3">ABOUT US</p>
        <p className="text-5xl text-center atamicfont">
          LEARN MORE <span className="text-red-600">ABOUT US</span>{" "}
        </p>
      </div>
      <div
        className="container flex flex-col  md:flex-row mx-auto px-5 "
        style={{ minHeight: "50rem" }}
      >
        <div
          className="photo mb-5 w-full md:w-3/5 relative"
          data-aos="fade-down"
        >
          <div
            className="w-10/12 py-6 absolute z-20 bg-white bottom-12 text-center "
            style={{ left: "50%", transform: `translateX(-50%) ` }}
          >
            <h3 className="text-2xl font-black">Book a Table</h3>
            <h2 className="text-3xl text-red-600 font-black">+249 999600611</h2>
          </div>

          <img
            src={rest}
            alt="dining tables"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div
          className="w-full md:w-2/5 md:ml-14 text-lg content flex flex-col content-between"
          data-aos="fade-up"
        >
          <div className="text-cont mb-5">
            <p className="pb-4 italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <p>
              <BsCheck2All className="text-red-500 inline-block mr-3" />
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              <BsCheck2All className="text-red-500 inline-block mr-3" />
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </p>
            <p>
              <BsCheck2All className="text-red-500 inline-block mr-3" />
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate trideta storacalaperda
              mastiro dolore eu fugiat nulla pariatur.
            </p>
            <p className="pt-4">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident
            </p>
          </div>

          <div
            className="overviwe flex content-end relative"
            style={{ height: "100%" }}
            data-aos="fade-up"
          >
            <img src={nakhp} alt="nakhp" />
            <button
              className="transform transition duration-500 hover:scale-125 rounded-full  text-white bg-red-600 z-10 absolute p-4"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
              onClick={() => showIframe()}
            >
              <FaPlay className="text-white" />
            </button>
            {/* <div
              className="transform transition duration-500 hover:scale-125 rounded-full  text-white bg-red-600 z-10 absolute flex justify-center items-center "
              style={{
                width: "6rem",
                height: "6rem",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            >
              <FaPlay className="text-white" />
            </div> */}
          </div>
        </div>
      </div>
      {vidState && <IframeVid vidState={vidState} setVidState={setVidState} />}
    </section>
  );
};

export default About;
