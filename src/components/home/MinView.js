import React from "react";
import pasta from "../../images/pasta1.png";
import { BsPlayCircle } from "react-icons/bs";

const MinView = () => {
  return (
    <section
      className=" bg-gray-200 py-14 flex content-center "
      style={{ minHeight: "40rem" }}
    >
      <div className="container  flex flex-col-reverse  md:flex-row mx-auto px-5">
        <div className="content md:w-1/2" data-aos="fade-right">
          <h1 className="atamicfont text-5xl md:text-6xl my-10 md:font-semibold">
            Enjoy Your Healthy
            <br />
            Delicious Food
          </h1>
          <p className="mb-5 md:pr-14">
            Sed autem laudantium dolores. Voluptatem itaque ea consequatur
            eveniet. Eum quas beatae cumque eum quaerat.
          </p>
          <button className="rounded-full bg-red-600 text-white px-10 py-3">
            Book Table
          </button>
          <button className="text-black font-medium text-xl  px-4 py1">
            <BsPlayCircle className="inline-block mr-1 font-semibold text-red-600" />{" "}
            Watch Video
          </button>
        </div>
        <div
          className="photo flex jutify-center item-center md:w-1/2"
          data-aos="fade-left"
        >
          <img className="w-full md:h-full" src={pasta} alt="food" />
        </div>
      </div>
    </section>
  );
};

export default MinView;
