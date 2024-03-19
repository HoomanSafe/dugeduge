import React from "react";
import Logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="w-full py-big bg-amber-600" id="hero">
      <div className="container grid items-center justify-between grid-cols-1 gap-16 lg:grid-cols-2">
        <article className="flex flex-col items-start gap-8">
          <h1
            className="text-5xl text-white font-Header lg:text-6xl md:leading-relaxed"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            duge bull run begins gain maximum benefits from the bullrun
          </h1>
          <p className="text-xl" data-aos="fade-right" data-aos-duration="500">
          if you are a crypto believer then this is your token, join in, let's moon together
          </p>
          <a
            href="https://pancakeswap.finance/swap?outputCurrency=0xf8fBB1aC35C3b62799f7F37FE79ac9EAa111C1c6"
            className="px-8 py-4 uppercase bg-white rounded shadow text-amber-600 font-Header"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            buy now
          </a>
        </article>
        <article className="relative flex items-center justify-center ">
          <img
            src={Logo}
            alt=""
            className="z-10"
            data-aos="zoom-out"
            data-aos-duration="1500"
          />
          <div className="w-[362.47px] h-[349.75px] absolute bg-orange-300 rounded-full blur-[100px] animate-pulse" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
