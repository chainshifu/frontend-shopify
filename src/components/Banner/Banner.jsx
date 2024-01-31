import React from "react";

function Banner({ bannerData, handleOrderPopup }) {
  return (
    <div className="min-h-[550px] flex justify-center items-center pt-5 pb-6">
      <div className="container">
        <div
          style={{ backgroundColor: bannerData.bgColor }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl"
        >
          <div className="p-6 sm:p-8">
            <p data-aos="slide-right" className="font-medium">
              {bannerData.discount}
            </p>
            <h1
              data-aos="zoom-out"
              className="text-4xl lg:text-6xl uppercase font-bold"
            >
              {bannerData.title}
            </h1>
            <p data-aos="fade-up" className="text-sm">
              {bannerData.date}
            </p>
          </div>
          <div data-aos="zoom-in" className="h-full flex items-center">
            <img
              src={bannerData.image}
              alt=""
              className="scale-105 w-[250px] md:w-[330px] mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 p-6 sm:p-5">
            <p data-aos="zoom-out" className="text-xl font-bold">
              {bannerData.subtitle}
            </p>
            <p data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              {bannerData.title_2}
            </p>
            <p data-aos="fade-up" className="text-sm tracking-wide leading-5">
              {bannerData.description}
            </p>
            <div data-aos="fade-up" data-aos-offset="0">
              <button
                className="bg-white text-primary w-[150px] py-2 px-4 rounded-md font-medium"
                onClick={handleOrderPopup}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
