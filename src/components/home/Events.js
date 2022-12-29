import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import pic1 from "../../images/nakhp.jpg";
import pic2 from "../../images/diningTab.jpg";
import pic3 from "../../images/birthday.jpg";
import pic4 from "../../images/diningTab2.jpg";

const Events = () => {
  window.location.pathname === "/events"
    ? (document.title = "Events")
    : (document.title = "Home");
  let events = [
    {
      title: "Custom Parties",
      price: 99,
      desc: " Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.",
      pic: pic1,
    },
    {
      title: "Birthday Parties",
      price: 499,
      desc: "  Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.",
      pic: pic2,
    },
    {
      title: "Private Parties",
      price: 289,
      desc: "  In delectus sint qui et enim. Et ab repudiandae inventore quaerat doloribus. Facere nemo vero est ut dolores ea assumenda et. Delectus saepe accusamus aspernatur.",
      pic: pic3,
    },
    {
      title: "Family Parties",
      price: 70,
      desc: "  Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.",
      pic: pic4,
    },
  ];

  return (
    <section
      className={`events pb-20 ${
        window.location.pathname === "/events" ? "pt-28" : "pt-20"
      }`}
    >
      <div className="title mb-10 text-center" data-aos="fade-up">
        <p className="text-sm text-slate-500 mb-4">EVENTS</p>
        <h3 className="text-5xl atamicfont ">
          SHARE <span className="text-red-600 ">YOUR MOMENTS </span> IN OUR
          RESTURANT
        </h3>
      </div>
      <div className="carousel" data-aos="fade-up">
        <Splide
          aria-label="My Favorite Images"
          options={{
            breakpoints: {
              1024: { perPage: 1, gap: "1em" },

              1600: {
                perPage: 3,
              },
            },
            arrows: false,
            autoplay: true,
            type: "loop",
            focus: "center",
            gap: "2em",
          }}
          className="flex justify-center"
        >
          {events.map((current, index) => (
            <>
              <SplideSlide className="relative" key={index}>
                <div className="absolute bottom-6 left-4 z-30 text-white">
                  <h3 className="text-2xl font-black">{current.title}</h3>
                  <p className="text-2xl  border-b-2 border-red-600 inline-block font-black">
                    ${current.price}
                  </p>
                  <p>{current.desc}</p>
                </div>
                <div
                  className="absolute w-full h-full"
                  style={{ background: "black", opacity: "0.6" }}
                ></div>
                <div
                  className=" flex justify-center"
                  style={{ height: "500px" }}
                >
                  <img
                    className="h-full w-full  object-cover"
                    src={current.pic}
                    alt="person"
                  />
                </div>
              </SplideSlide>
            </>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Events;
