import React from "react";
import mic from "../assets/mic.png";

const Mics = () => {
  return (
    <section className="w-full py-small bg-amber-600" id="tokenomics">
      <div className="container flex flex-col items-center justify-center ">
        <h1
          className="text-6xl text-orange-100 uppercase break-all font-Header lg:text-9xl"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          tokenomics
        </h1>
        <section className="grid items-center justify-between w-full grid-cols-1 gap-16 mt-20 lg:grid-cols-2">
          <img src={mic} alt="" />
          <article className="flex flex-col ">
            <h3
              className="text-2xl text-white font-timmana"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              TOKEN SUPPLY: 10,000
            </h3>

            <div className="flex flex-col gap-8 mt-10 font-fredokaOne">
              <div className="flex flex-col gap-5">
                <div
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  className="inline-flex items-start justify-between w-full h-8"
                >
                  <div className="text-white text-[24px] font-normal leading-loose">
                    Supply
                  </div>
                  <div className=" text-[24px] font-normal leading-loose">
                    10,000
                  </div>
                </div>
                <div className="inline-flex items-center justify-start w-full h-5 bg-red-100 rounded-full">
                  <div className="relative w-11/12 h-5 rounded-full bg-amber-300" />
                </div>
              </div>
              <div
                data-aos="zoom-right"
                data-aos-duration="1500"
                className="flex flex-col gap-5"
              >
                <div className="inline-flex items-start justify-between w-full h-8">
                  <div className="text-white text-[24px] font-normal leading-loose">
                    CA
                  </div>
                  <div
                    className=" text-[24px] flex items-center gap-4 font-normal leading-loose"
                    onClick={() => {
                      navigator.clipboard
                        .writeText("0xf8fBB1aC35C3b62799f7F37FE79ac9EAa111C1c6")
                        .then(() => {
                          alert("Contract Copied");
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}
                  >
                    -0xf8fBB1aC35C3b62799f7F37FE79ac9EAa111C1c6
                  </div>
                </div>
                <div className="inline-flex items-center justify-start w-full h-5 bg-red-100 rounded-full">
                  <div className="relative w-4/12 h-5 bg-blue-400 rounded-full" />
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
};

export default Mics;
