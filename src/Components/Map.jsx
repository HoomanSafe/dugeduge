import React from "react";

const Map = () => {
  return (
    <section className="w-full bg-white py-small text-amber-600" id="roadmap">
      <div className="container flex flex-col items-center justify-center ">
        <h1
          className="text-6xl text-orange-100 uppercase break-all font-Header lg:text-9xl"
          data-aos="zoom-out"
          data-aos-duration="1500"
        >
          roadmaps
        </h1>

        <section className="grid items-center justify-between w-full grid-cols-1 mt-16 uppercase font-special gap-14 lg:grid-cols-3">
          <article
            data-aos="fade-right"
            data-aos-duration="1500"
            className="flex flex-col items-center justify-center px-3 py-8 bg-gradient-to-b from-amber-600 to-amber-600 rounded-2xl"
          >
            <div className="inline-flex flex-col items-start justify-start w-full gap-8 ">
              <div className="inline-flex items-center justify-start gap-3">
                <div className="relative w-3 h-3 bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  token launch On BSC
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-3">
                <div className="relative w-3 h-3 bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  Guerilla style marketing campaign
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-3">
                <div className="relative w-3 h-3 bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  list on cmc
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-3">
                <div className="relative w-3 h-3 bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  list on CG
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-3">
                <div className="relative w-3 h-3 bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  Mars Mission
                </div>
              </div>
              <h1 className="text-4xl leading-10 text-center text-white">
                PHASE 01
              </h1>
            </div>
          </article>
          <article
            data-aos="fade-up"
            data-aos-duration="1500"
            className="flex flex-col items-center justify-center px-3 py-8 bg-gradient-to-b from-amber-600 to-amber-600 rounded-2xl"
          >
            <div className="inline-flex flex-col items-start justify-start w-full gap-8 ">
              <div className="inline-flex items-center justify-start gap-3">
                <div className="relative w-3 h-3 bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  exchange listings
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-3">
                <div className="relative w-3 h-3 bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  Continued Marketing and collaborations
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-3">
                <div className="relative w-3 h-3 bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  Strategic partnerships with major brands.
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-3">
                <div className="relative w-3 h-3 bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  Deliver Elon a daddy doge 2.0 tshirt and mascot
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-3">
                <div className="relative w-3 h-3 bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  Top Secret Mission
                </div>
              </div>
              <h1 className="text-4xl leading-10 text-center text-white">
                PHASE 02
              </h1>
            </div>
          </article>
          <article
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="flex flex-col items-center justify-center px-3 py-8 bg-gradient-to-b from-amber-600 to-amber-600 rounded-2xl"
          >
            <div className="inline-flex flex-col items-start justify-start w-full gap-8 ">
              <div className="inline-flex items-center justify-start gap-3">
                <div className="relative w-3 h-3 bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  Global Marketing Takeover with billboards in London, NY, Tokyo
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-3">
                <div className="relative w-3 h-3 bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  Listings on T1 exchanges
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-3">
                <div className="relative w-3 h-3 bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  500m Market Cap
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-3">
                <div className="relative w-3 h-3 bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  Duge Duge to Mars
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-3">
                <div className="relative w-3 h-3 bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  Duge new awakening{" "}
                </div>
              </div>
              <h1 className="text-4xl leading-10 text-center text-white">
                PHASE 03
              </h1>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
};

export default Map;
