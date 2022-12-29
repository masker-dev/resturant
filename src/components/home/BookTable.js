import React from "react";
import pic from "../../images/baltes.jpg";

const BookTable = () => {
  return (
    <section className="bookTable py-20">
      <div className="container mx-auto px-5">
        <div className="title mb-10 text-center" data-aos="fade-up">
          <p className="text-sm text-slate-500 mb-4">BOOK A TABLE</p>
          <h3 className="text-5xl atamicfont ">
            BOOK <span className="text-red-600 ">YOUR STAY </span>WITH US
          </h3>
        </div>

        <div
          style={{ minHeight: "80vh" }}
          className="content flex flex-col lg:flex-row "
        >
          <div className="picture w-full lg:w-1/3 " data-aos="fade-up">
            <img
              className="h-full lg:w-full lg:h-full object-cover"
              src={pic}
              alt="pic"
            />
          </div>
          <div className="fields flex flex-row items-center w-full py-9 lg:w-2/3  bg-gray-100 ">
            <form
              className="w-full "
              data-aos="zoom-in"
              data-aos-duration="1300"
            >
              <div className="flex flex-col  md:flex-row md:flex-wrap justify-between md:justify-evenly">
                <div className="lg:w-1/3 md:w-5/12 mb-6">
                  <input
                    type="text"
                    className="border border-gray-300 p-3 w-11/12 block mx-auto md:w-full lg:w-11/12 lg:block lg:mx-auto"
                    name="yourName"
                    placeholder="Your Name"
                  />
                </div>
                <div className="lg:w-1/3 md:w-5/12 mb-6">
                  <input
                    type="text"
                    className="border border-gray-300 p-3 w-11/12 block mx-auto md:w-full lg:w-11/12 lg:block lg:mx-auto"
                    name="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="lg:w-1/3 md:w-5/12 mb-6">
                  <input
                    type="text"
                    className="border border-gray-300 p-3 w-11/12 block mx-auto md:w-full lg:w-11/12 lg:block lg:mx-auto"
                    name="phone"
                    placeholder="Your phone"
                  />
                </div>
                <div className="lg:w-1/3 md:w-5/12 mb-6">
                  <input
                    type="text"
                    className="border border-gray-300 p-3 w-11/12 block mx-auto md:w-full lg:w-11/12 lg:block lg:mx-auto"
                    name="date"
                    placeholder="Date"
                  />
                </div>
                <div className="lg:w-1/3 md:w-5/12 mb-6">
                  <input
                    type="text"
                    className="border border-gray-300 p-3 w-11/12 block mx-auto md:w-full lg:w-11/12 lg:block lg:mx-auto"
                    name="Time"
                    placeholder="Time"
                  />
                </div>
                <div className="lg:w-1/3 md:w-5/12 mb-6">
                  <input
                    type="number"
                    className="border border-gray-300 p-3 w-11/12 block mx-auto md:w-full lg:w-11/12 lg:block lg:mx-auto"
                    name="people"
                    placeholder="#Of People"
                  />
                </div>
              </div>

              <div className="px-3">
                <textarea
                  className="block border border-gray-300 p-3 w-full mb-6"
                  rows={5}
                  placeholder="Message"
                ></textarea>
                <div className="flex justify-center">
                  <button className=" w-44 py-3 rounded-full bg-red-600 text-white">
                    Book a Table
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTable;
