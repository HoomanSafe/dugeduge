import React from "react";
import car from "../assets/dugemoon.jpg";
import Banner2 from "../assets/dugemoon.jpg";
import Banner3 from "../assets/dugemoon.jpg";
import ReactPlayer from "react-player";

const Photo = () => {
  return (
    <section className="w-full text-black py-small">
      <div className="container flex flex-col items-center justify-center">
        <a href="" data-aos="zoom-in" data-aos-duration="1500">
          <img src={car} alt="" />
        </a>

        <article className="grid items-center justify-between w-full gap-14 md:grid-cols-2">
          <a href="" data-aos="zoom-out" data-aos-duration="1500">
            <img src={Banner2} alt="" />
          </a>
          <a href="">
            <img
              src={Banner3}
              alt=""
              data-aos="zoom-out"
              data-aos-duration="1500"
            />
          </a>
          
        </article>
      </div>
    </section>
  );
};

export default Photo;
