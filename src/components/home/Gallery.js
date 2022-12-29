import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import chef1 from "../../images/chef1.jpg";
import birthday from "../../images/birthday.jpg";
import diningTab2 from "../../images/diningTab2.jpg";
import client from "../../images/client.jpg";
import ourResturant from "../../images/ourResturant.jpg";
import client1 from "../../images/client1.jpg";
import ourResturant1 from "../../images/ourResturant1.jpg";
import client2 from "../../images/client2.jpg";
import Previewer from "./Previewer";

const Gallery = () => {
  const pics = [
    chef1,
    birthday,
    diningTab2,
    client,
    ourResturant,
    client1,
    ourResturant1,
    client2,
  ];
  const [prev, setPrev] = useState(false);
  const [picture, setPicture] = useState(null);
  return (
    <section className="gallery py-20 bg-gray-200">
      <div className="container mx-auto px-5">
        <div className="title mb-10 text-center" data-aos="fade-up">
          <p className="text-sm text-slate-500 mb-4">GALLERY</p>
          <h3 className="text-5xl atamicfont ">
            CHECK <span className="text-red-600 ">OUR GALLERY </span>
          </h3>
        </div>
        <div className="carousel" data-aos="fade-up">
          <Splide
            aria-label="My Favorite Images"
            options={{
              perPage: 5,
              autoplay: true,
              focus: 2,
              trimSpace: "move",
              gap: "1em",
              type: "loop",
              arrows: false,
              breakpoints: {
                1200: { perPage: 3 },
                640: {
                  perPage: 1,
                  arrows: true,
                },
              },
            }}
          >
            {pics.map((pic, index) => (
              <>
                <SplideSlide>
                  <button
                    className="m-0 p-0 w-full"
                    onClick={() => {
                      setPicture(pic);
                      setPrev(!prev);
                    }}
                    key={index}
                  >
                    <div style={{ height: "200px" }}>
                      <img
                        key={index}
                        src={pic}
                        alt="pic"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </button>
                </SplideSlide>
              </>
            ))}
          </Splide>
        </div>
      </div>
      {prev && <Previewer prev={prev} setPrev={setPrev} picture={picture} />}
    </section>
  );
};

export default Gallery;
