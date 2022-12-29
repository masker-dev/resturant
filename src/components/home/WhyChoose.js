import React from "react";
import { BsClipboardData, BsGem, BsInboxes } from "react-icons/bs";
const WhyChoose = () => {
  return (
    <>
      <section className="bg-gray-200 ">
        <div
          className="container mx-auto px-5 py-20 flex flex-col md:flex-row justify-between  items-start lg:items-center"
          style={{ minHeight: "600px" }}
        >
          <div
            className="bg-red-600 mb-6 p-7 md:mr-7 text-white basis-1/2 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3 className="text-4xl font-bold mb-7">Why Choose Sherco?</h3>
            <p className="font-semibold mb-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit Asperiores dolores sed et.
              Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio
              ad corporis.
            </p>
            <div className="flex justify-center mb-3">
              <button className="px-5 py-2 bg-red-400 font-semibold rounded-full ">
                Learn more
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between lg:flex-row">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-delay="700"
              className="text-center py-8 px-6 lg:mr-7 mb-6 bg-white basis-1/3 hover:scale-110 transition-transform "
              style={{ height: "370px" }}
            >
              <div className="icon mb-5">
                <div className=" p-5 rounded-full bg-red-100 text-red-700 text-3xl inline-block ">
                  <BsClipboardData />
                </div>
              </div>
              <div className="title mb-5 text-2xl">
                <h4>Corporis voluptates officia eiusmod</h4>
              </div>
              <div className="conent text-gray-600">
                <p>
                  Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                  laboris nisi ut aliquip
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1400"
              data-delay="500"
              className="text-center py-8 px-6 lg:mr-7 mb-6 bg-white basis-1/3 hover:scale-110 transition-transform"
              style={{ height: "370px" }}
            >
              <div className="icon mb-5">
                <div className=" p-5 rounded-full bg-red-100 text-red-700 text-3xl inline-block ">
                  <BsGem />
                </div>
              </div>
              <div className="title mb-5 text-2xl">
                <h4>Ullamco laboris ladore pan</h4>
              </div>
              <div className="conent text-gray-600">
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1600"
              data-delay="300"
              className="text-center py-8 px-6 lg:mr-7 mb-6 bg-white basis-1/3 hover:scale-110 transition-transform"
              style={{ height: "370px" }}
            >
              <div className="icon mb-5">
                <div className=" p-5 rounded-full bg-red-100 text-red-700 text-3xl inline-block ">
                  <BsInboxes />
                </div>
              </div>
              <div className="title mb-5 text-2xl">
                <h4>Labore consequatur incidid dolore</h4>
              </div>
              <div className="conent text-gray-600">
                <p>
                  Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                  maiores omnis facere
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="background"
        className="background relative"
        style={{
          height: "25rem",
        }}
      >
        <div className="absolute top-0 w-full h-full bg-black opacity-60"></div>
        <div className="container position  h-full text-center mx-auto px-5 flex items-center justify-evenly flex-col sm:content-evenly sm:flex-row sm:flex-wrap ">
          <div
            className="clients w-full sm:w-2/4 md:w-1/4 z-20"
            data-aos="flip-left"
          >
            <h1 className="text-5xl font-bold text-white">232</h1>
            <p className="text-gray-400 text-lg font-medium">Clients</p>
          </div>
          <div
            className="projects w-full sm:w-2/4 md:w-1/4 z-20"
            data-aos="flip-left"
          >
            <h1 className="text-5xl font-bold text-white">521</h1>
            <p className="text-gray-400 text-lg font-medium">Projects</p>
          </div>
          <div
            className="support w-full sm:w-2/4 md:w-1/4 z-20"
            data-aos="flip-left"
          >
            <h1 className="text-5xl font-bold text-white">1453</h1>
            <p className="text-gray-400 text-lg font-medium">
              Hours of support
            </p>
          </div>
          <div
            className="workers w-full sm:w-2/4 md:w-1/4 z-20"
            data-aos="flip-left"
          >
            <h1 className="text-5xl font-bold text-white">32</h1>
            <p className="text-gray-400 text-lg font-medium">Workers</p>
          </div>
          {/*<div className="first bg-red-500 w-full flex flex-col sm:flex-row  text-center">
            
             <div className="clients">
              <h1 className="text-white">232</h1>
              <p>Clients</p>
            </div>
            <div className="projects">
              <h1>521</h1>
              <p>Projects</p>
            </div>
          </div>
          <div className="second w-full bg-blue-900 flex flex-col sm:flex-row text-center">
            <div className="support">
              <h1>1453</h1>
              <p>Hours of support</p>
            </div>
            <div className="workers">
              <h1>32</h1>
              <p>Workers</p>
            </div> 
          </div>*/}
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
