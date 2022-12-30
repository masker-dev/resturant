import React, { useRef, useState } from "react";
import About from "../components/home/About";
import BookTable from "../components/home/BookTable";
import Chefs from "../components/home/Chefs";
import Contact from "../components/home/Contact";
import Events from "../components/home/Events";
import Gallery from "../components/home/Gallery";
import MainView from "../components/home/MinView";
import OurMenue from "../components/home/OurMenue";
import Testimonials from "../components/home/Testimonials";
import WhyChoose from "../components/home/WhyChoose";
import { BsArrowUpShort } from "react-icons/bs";

const Home = () => {
  const [arrowState, setArrowState] = useState(false);
  const upper = useRef();
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  window.onscroll = () => {
    if (window.scrollY > 300) {
      console.log(window.scrollY);
      setArrowState(true);
    } else {
      setArrowState(false);
    }
  };

  return (
    <>
      <MainView />
      <About />
      <WhyChoose />
      <OurMenue />
      <Testimonials />
      <Events />
      <Chefs />
      <BookTable />
      <Gallery />
      <Contact />
      {arrowState && (
        <div
          ref={upper}
          className={`upper w-12 h-12 fixed bottom-3 right-3 ${
            arrowState ? "block" : "hidden"
          } bg-red-600 text-white rounded-full flex justify-center items-center `}
        >
          <button onClick={scrollTop}>
            <BsArrowUpShort className="text-2xl font-semibold" />
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
