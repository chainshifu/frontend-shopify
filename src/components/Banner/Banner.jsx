import React from "react";

function Banner({ bannerData }) {
  return (
    <div className="min-h-[550px] flex justify-center items-center pt-5 pb-6">
      <div className="container">
        <div
          style={{ backgroundColor: bannerData.bgColor }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl"
        >
          <div className="p-6 sm:p-8">
            <p className="font-medium">{bannerData.discount}</p>
            <h1 className="text-4xl lg:text-6xl uppercase font-bold">
              {bannerData.title}
            </h1>
            <p className="text-sm">{bannerData.date}</p>
          </div>
          <div className="h-full flex items-center">
            <img
              src={bannerData.image}
              alt=""
              className="scale-105 w-[250px] md:w-[330px] mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 p-6 sm:p-5">
            <p className="text-xl font-bold">{bannerData.subtitle}</p>
            <p className="text-3xl sm:text-4xl font-bold">
              {bannerData.title_2}
            </p>
            <p className="text-sm tracking-wide leading-5">
              {bannerData.description}
            </p>
            <button className="bg-white text-primary w-[150px] py-2 px-4 rounded-md font-medium">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
