import React from "react";
import LocomotiveScroll from "locomotive-scroll";

const Header = () => {
  const scroll = new LocomotiveScroll();
  return (
    <header className="container absolute top-0 w-full py-3">
      <nav className="flex items-center gap-10 p-4 overflow-hidden bg-orange-400 rounded-lg md:justify-between lg:justify-start">
        <a
          href=""
          className="text-3xl uppercase font-Header hover:text-black"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          DUGE DUGE
        </a>

        <ul
          className="items-center hidden ml-auto lg:flex gap-9"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <li
            className="text-xl capitalize transition cursor-pointer hover:text-black"
            onClick={() => {
              scroll.scrollTo(document.querySelector("#hero"));
            }}
          >
            home
          </li>
          <li
            className="text-xl capitalize transition cursor-pointer hover:text-black"
            onClick={() => {
              scroll.scrollTo(document.querySelector("#about"));
            }}
          >
            about
          </li>
          <li
            className="text-xl capitalize transition cursor-pointer hover:text-black"
            onClick={() => {
              scroll.scrollTo(document.querySelector("#roadmap"));
            }}
          >
            roadmaps
          </li>
          <li
            className="text-xl capitalize transition cursor-pointer hover:text-black"
            onClick={() => {
              scroll.scrollTo(document.querySelector("#tokenomics"));
            }}
          >
            tokenomics
          </li>
        </ul>
        <a
          href="https://pancakeswap.finance/swap?outputCurrency=0xf8fBB1aC35C3b62799f7F37FE79ac9EAa111C1c6"
          className="hidden px-8 py-4 uppercase bg-white rounded shadow md:block text-amber-600 font-Header"
          data-aos="fade-left"
          data-aos-duration="900"
        >
          buy now
        </a>
      </nav>
    </header>
  );
};

export default Header;
