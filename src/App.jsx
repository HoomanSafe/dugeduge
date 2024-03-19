import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Banner from "./assets/dugemoon.jpg";
import Photo from "./Components/Photo";
import Mics from "./Components/Mics";
import Map from "./Components/Map";
import Footer from "./Components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init();

    document.querySelectorAll("img").forEach((image) => {
      image.setAttribute("loading", "lazy");
    });
  }, []);
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-x-hidden text-white font-para">
      <Header />
      <Hero />
      <About />
      <a href="" data-aos="zoom-out" data-aos-duration="1500">
        <img src={Banner} alt="" className="w-full" />
      </a>
      
      <Mics />
      <Map />
      <Footer />
    </div>
  );
};

export default App;
