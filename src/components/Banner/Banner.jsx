import React from "react";

function Banner({ bannerData }) {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-10">
      <div className="container">
        <div
          style={{ backgroundColor: bannerData.bgColor }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div>
            <p>{bannerData.discount}</p>
            <h1>{bannerData.title}</h1>
            <p>{bannerData.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
