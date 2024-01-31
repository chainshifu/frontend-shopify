import React from "react";
import Brand_1 from "../../assets/images/br-1.png";
import Brand_2 from "../../assets/images/br-2.png";
import Brand_3 from "../../assets/images/br-3.png";
import Brand_4 from "../../assets/images/br-4.png";
import Brand_5 from "../../assets/images/br-5.png";

function Brands() {
  return (
    <div className=" hidden md:block bg-gray-200 dark:bg-white/10 py-7 mt-20">
      <div className="container">
        <div
          data-aos="zoom-out"
          className="grid grid-cols-5 gap-3 place-items-center opa"
        >
          <img src={Brand_1} alt="" className="w-[80px] dark:invert" />
          <img src={Brand_2} alt="" className="w-[80px] dark:invert" />
          <img src={Brand_3} alt="" className="w-[80px] dark:invert" />
          <img src={Brand_4} alt="" className="w-[80px] dark:invert" />
          <img src={Brand_5} alt="" className="w-[80px] dark:invert" />
        </div>
      </div>
    </div>
  );
}

export default Brands;
