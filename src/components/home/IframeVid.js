import React from "react";
import { VscChromeClose } from "react-icons/vsc";

const IframeVid = ({ vidState, setVidState }) => {
  return (
    <div
      id="iframe"
      className="iframe bg-stone-900 fixed top-0 z-20  h-full w-full pt-16 "
    >
      <button
        className=" float-right px-4 py-2 text-3xl "
        onClick={() => setVidState(!vidState)}
      >
        <VscChromeClose className="text-white" />
      </button>
      <div style={{ clear: "both" }}></div>
      <div className="h-full">
        <iframe
          style={{ width: "100%", height: "87%" }}
          src="https://www.youtube.com/embed/RwfxkSoex4k"
          title="Noodles"
        ></iframe>
      </div>
    </div>
  );
};

export default IframeVid;
