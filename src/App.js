import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/home/About";
import Aos from "aos";
import { useEffect } from "react";
import Contact from "./components/home/Contact";
import Events from "./components/home/Events";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      disable: () => {
        if (window.location.pathname !== "/") {
          window.scrollTo(0, 0);
          return true;
        } else {
          return false;
        }
      },
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="events" element={<Events />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
