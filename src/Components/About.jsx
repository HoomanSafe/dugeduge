import React from "react";
import phone from "../assets/dugemoon.jpg";

const About = () => {
  return (
    <section className="w-full bg-white py-small text-amber-600" id="about">
      <div className="container flex flex-col items-center justify-center ">
        <h1
          className="text-6xl text-orange-100 uppercase break-all font-Header lg:text-9xl"
          data-aos="zoom-out"
          data-aos-duration="1500"
        >
          about us
        </h1>

        <section className="grid items-center justify-between grid-cols-1 gap-16 mt-12 lg:grid-cols-2">
          <img
            src={phone}
            alt=""
            data-aos="zoom-out"
            data-aos-duration="1200"
          />

          <article className="flex flex-col items-start gap-8">
            <h1
              className="font-Header text-4xl uppercase lg:text-6xl leading-[140%]"
              data-aos="zoom-in"
              data-aos-duration="900"
            >
              History. - Mission 
            </h1>
            <p
              className="text-black leading-[32px]"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
             DUGE will be the new Meme trend 
             In the crypto space with amazing 
             contract technology developed to meet 
             the needs of investors, as the duge bull 
             run begins aiming to build a space where its
              holders can gain maximum benefits from the bullrun,
               the team behind the project is ready to work hard
                with marketing strategies quality, 
                the contract also provides an automatic burning 
                supply Mechanism to bring tokens to ATH and Auto lp 
            </p>
            <a
              href="https://t.me/DugeDuge"
              className="px-8 py-4 text-white uppercase rounded shadow bg-amber-500 font-Header"
              data-aos="flip-left"
              data-aos-duration="1500"
            >
              telegram
            </a>
          </article>
        </section>
      </div>
    </section>
  );
};

export default About;
