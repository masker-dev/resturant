import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { testimonials } from "./meals";
import { BsStarFill } from "react-icons/bs";
const Testimonials = () => {
  //   const testimonials = [
  //     {
  //       content: `Enim nisi quem export duis labore cillum quae magna enim
  //             sint quorum nulla quem veniam duis minim tempor labore quem
  //             eram duis noster aute amet eram fore quis sint minim.`,
  //       name: `Sara wilsson`,
  //       role: "Designer",
  //       rate: 4,
  //       pic: person1,
  //     },
  //     {
  //       content: ` Proin iaculis purus consequat sem cure digni ssim donec
  //       porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id,
  //        aliquam eget nibh et. Maecen aliquam, risus at semper. `,
  //       name: "Johne Larson",
  //       role: "Enterprenuer",
  //       rate: 4,
  //       pic: person2,
  //     },
  //     {
  //       content: ` Enim nisi quem export duis labore cillum quae magna enim sint
  //          quorum nulla quem veniam duis minim tempor labore quem eram duis noster
  //          aute amet eram fore quis sint minim. `,
  //       name: "Jena Karlis",
  //       role: "Sotre Owner",
  //       rate: 4,
  //       pic: person3,
  //     },
  //     {
  //       content: ` Export tempor illum tamen malis malis eram quae irure esse labore
  //          quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua
  //           noster fugiat irure amet legam anim culpa. `,
  //       name: "Sual Goodman",
  //       role: "CEO & Founder",
  //       rate: 4,

  //     },
  //   ];
  return (
    <section className="testimonials py-20 bg-gray-200 ">
      <div className="contianer mx-auto px-5">
        <div className="title mb-10 text-center" data-aos="fade-up">
          <p className="text-sm text-slate-500 mb-4">TESTIMONIALS</p>
          <h3 className="text-5xl atamicfont ">
            WHAT ARE THEY <span className="text-red-600 ">SAYING ABOUT US</span>
          </h3>
        </div>
        <div className="carousel" data-aos="fade-up">
          <Splide
            aria-label="testimonials"
            options={{
              perPage: 1,
              arrows: false,
              autoplay: true,
              type: "loop",
            }}
            className="flex justify-center"
          >
            {testimonials.map((current, index) => (
              <>
                <SplideSlide key={index}>
                  <div className="flex flex-col mx-auto w-full   md:flex-row md:w-8/12 ">
                    <div className="w-full border-l-4 border-red-600 pl-6 py-1 md:w-4/6">
                      <p className="mb-6 md:pr-5">{current.content}</p>
                      <h3 className="text-3xl font-bold">{current.name}</h3>
                      <p className="text-zinc-700">{current.role}</p>
                      <div className="flex " style={{ color: "#ffc107" }}>
                        <BsStarFill className="mx-px" />
                        <BsStarFill className="mx-px" />
                        <BsStarFill className="mx-px" />
                        <BsStarFill className="mx-px" />
                      </div>
                    </div>
                    <div className="flex justify-center items-center w-full md:w-2/6">
                      <img
                        className="rounded-full border-4 border-white w-72 h-72 sm:w-96 sm:h-96 md:w-40 md:h-40 object-cover"
                        src={current.pic}
                        alt="person"
                      />
                    </div>
                  </div>
                </SplideSlide>
              </>
            ))}
            {/* <SplideSlide>
              <div className="flex flex-col mx-auto w-full   md:flex-row md:w-8/12 ">
                <div className="w-full border-l-4 border-red-600 pl-6 py-1 md:w-4/6">
                  <p className="mb-6 md:pr-5">
                    Enim nisi quem export duis labore cillum quae magna enim
                    sint quorum nulla quem veniam duis minim tempor labore quem
                    eram duis noster aute amet eram fore quis sint minim.
                  </p>
                  <h3 className="text-3xl font-bold">Sara Wilsson</h3>
                  <p className="text-zinc-700">Designer</p>
                  <div className="flex " style={{ color: "#ffc107" }}>
                    <BsStarFill className="mx-px" />
                    <BsStarFill className="mx-px" />
                    <BsStarFill className="mx-px" />
                    <BsStarFill className="mx-px" />
                  </div>
                </div>
                <div className="flex justify-center items-center w-full md:w-2/6">
                  <img
                    className="rounded-full border-4 border-white w-72 h-72 sm:w-96 sm:h-96 md:w-40 md:h-40 object-cover"
                    src={persone}
                    alt="person"
                  />
                </div>
              </div>
            </SplideSlide> */}

            {/* <SplideSlide>
              <div className="bg-blue-700 w-96 h-96">safdsaf</div>
            </SplideSlide> */}
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
