import React from "react";
import { VscChromeClose } from "react-icons/vsc";

const Previewer = ({ prev, setPrev, picture }) => {
  // let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  // let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; // if any scroll is attempted, set this to the previous value
  // window.onscroll = function () {
  //   window.scrollTo(scrollLeft, scrollTop);
  // };
  return (
    <section
      style={{ height: "100vh" }}
      className="previewer bg-gray-900 fixed top-0 z-20  w-full opacity-95"
    >
      <div className="flex flex-row-reverse mb-8 ">
        <button
          className=" mt-20 mx-4 p2 shadow-lg shadow-black text-3xl "
          onClick={() => {
            setPrev(!prev);
            window.onscroll = function () {};
          }}
        >
          <VscChromeClose className="text-white" />
        </button>
      </div>

      <div className="overflow-hidden flex justify-center items-start w-full h-full">
        {picture && (
          <img
            className="h-5/6 lg:h-4/5  shadow-lg shadow-black"
            src={picture}
            alt="Masker"
          />
        )}
      </div>
    </section>
  );
};

export default Previewer;
