import React, { useState } from "react";
import meals from "./meals";
import Previewer from "./Previewer";

const OurMenue = () => {
  const [items, setItems] = useState(meals);
  // const [prevState, setPrevState] = useState({ isOpen: false, picture: null });
  // const [meal, setMeal] = useState(null)
  const [prev, setPrev] = useState(false);
  const [picture, setPicture] = useState(null);

  function handelPreview(sentPic) {
    // setPrevState({ ...prevState, picture: sentPic, isOpen: !prevState.isOpen });
    setPicture(sentPic);
    setPrev(!prev);
  }
  function handelClick(e, categItem) {
    let btn = e.target;
    let parent = btn.parentNode;
    let siblings = parent.childNodes;

    for (let i = 0; i < siblings.length; i++) {
      siblings[i].classList.remove("text-red-600");
      siblings[i].classList.remove("border-red-600");
    }
    btn.classList.add("text-red-600");
    btn.classList.add("border-red-600");

    if (categItem !== "all") {
      let updatedMenue = meals.filter((currentMeal) => {
        return currentMeal.category === categItem;
      });
      setItems(updatedMenue);
    } else {
      setItems(meals);
    }
  }
  return (
    <>
      <section className="menue py-20 text-center">
        <div className="container mx-auto px-5">
          <div className="title mb-10" data-aos="fade-up">
            <p className="text-sm text-slate-500 mb-4">OUR MENU</p>
            <h3 className="text-5xl atamicfont ">
              CHECK OUR <span className="text-red-600 ">Sherco MENU</span>
            </h3>
          </div>
          <div className="categ " data-aos="fade-up">
            <button
              className="mr-5 p-2 text-gray-900 text-lg font-bold hover:text-red-600  border-b-2 border-red-600 text-red-600"
              onClick={(e) => handelClick(e, "all")}
              key={1}
            >
              All
            </button>
            <button
              key={2}
              className="mr-5 p-2 text-gray-900 text-lg font-bold hover:text-red-600  border-b-2 "
              onClick={(e) => handelClick(e, "lunch")}
            >
              Lunch
            </button>
            <button
              key={3}
              className="mr-5 p-2 text-gray-900 text-lg font-bold hover:text-red-600  border-b-2 "
              onClick={(e) => handelClick(e, "breackfast")}
            >
              Breackfast
            </button>
            <button
              key={4}
              className="mr-5 p-2 text-gray-900 text-lg font-bold hover:text-red-600  border-b-2 "
              onClick={(e) => handelClick(e, "dinner")}
            >
              Dinner
            </button>
          </div>
          <div
            className="meals flex flex-col md:flex-row md:flex-wrap justify-start pt-5"
            data-aos="fade-up"
          >
            {items.map((meal, index) => (
              <>
                <div className={`card md:w-1/3 mb-5 pt-5`} key={index + Date()}>
                  <button
                    key={index + Date()}
                    onClick={() => handelPreview(meal.img)}
                  >
                    <img
                      className="mx-auto w-7/12 h-7/12 object-cover mb-5"
                      src={meal.img}
                      alt={meal.title + " picture"}
                    />
                  </button>
                  <h3 className="text-2xl font-medium mb-3 text-stone-600">
                    {meal.title}
                  </h3>
                  <p className="text-lg text-slate-500">{meal.disc}</p>
                  <p className="text-red-600 text-2xl font-bold">
                    ${meal.price}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
        {prev && <Previewer prev={prev} setPrev={setPrev} picture={picture} />}
      </section>
    </>
  );
};

export default OurMenue;
