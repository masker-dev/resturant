import React, { useRef, useState } from "react";

import { Link, NavLink } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const myHeader = useRef();
  const navMenu = useRef();
  const [isOpen, setIsOpen] = useState(true);
  window.onresize = () => {
    let secWidth = window.innerWidth;
    if (secWidth < 768) myHeader.current.classList.add("mobileView");
    else myHeader.current.classList.remove("mobileView");
  };
  window.onscroll = () => {
    myHeader.current.classList.toggle("stikky", window.scrollY > 120);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      id="header"
      ref={myHeader}
      style={{ height: "4rem" }}
      className=" fixed top-0 left-0 w-full flex justify-between transition-all duration-500 z-30 bg-white "
    >
      <div className="container h-full mx-auto px-5 flex justify-between items-center">
        <Link to="/" className="text-3xl w-1/3">
          Kav<span className="text-red-600">Food</span>
        </Link>
        <nav
          ref={navMenu}
          className={`nav-links fixed w-full sm:w-6/12 pt-5 pl-4 h-full top-16 ${
            isOpen ? "-right-full" : "-right-0 "
          } flex flex-col justify-start bg-teal-800 md:bg-inherit  md:static md:flex-row md:justify-between md:items-center md:w-1/3 duration-500`}
        >
          <div className="mb-4 ">
            <NavLink to="/" className="nav-link" onClick={toggleMenu}>
              Home
            </NavLink>
          </div>
          <div className="mb-4">
            <NavLink to="about" className="nav-link" onClick={toggleMenu}>
              About
            </NavLink>
          </div>
          <div className="mb-4">
            <NavLink to="contact" className="nav-link" onClick={toggleMenu}>
              Contact
            </NavLink>
          </div>
          <div className="mb-4">
            <NavLink to="events" className="nav-link" onClick={toggleMenu}>
              Events
            </NavLink>
          </div>
        </nav>
        <div className="w-1/2  sm:grow-0 md:w-1/3 flex justify-between flex-row-reverse">
          {/* <button className="rounded-full bg-red-600 text-white px-8 py-2 md:float-right">
          Book Table
        </button> */}
          <button className="block text-2xl md:hidden" onClick={toggleMenu}>
            {isOpen ? <GiHamburgerMenu /> : <FaTimes />}
          </button>
          <button className="rounded-full bg-red-600 text-sm sm:text-base text-white px-3 md:px-8 py-2">
            Book a Table
          </button>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
