import React from "react";
import Button from "../Hero/Button";

function ProductCards({ data, handleOrderPopup }) {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {data.map((item) => (
          <div
            data-aos="fade-up"
            data-aos-delay={item.aosDelay}
            key={item.id}
            className="group"
          >
            <div className="bg-gradient-to-r from-gray-400 to-gray-400 rounded-md relative">
              <img
                src={item.image}
                alt=""
                className="h-[200px] sm:h-[160px] lg:h-[220px] xl:h-[250px] w-[200px] xl:w-[250px] rounded-md object-cover object-center top-1/2 p-2"
              />
              <div
                className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-full justify-center items-center text-center group-hover:backdrop-blur-[1.5px] duration-300"
                onClick={handleOrderPopup}
              >
                <Button
                  text={"Add To Cart"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <div className="loading-7">
              <h2 className="text-medium xl:text-xl font-semibold">
                {item.title}
              </h2>
              <h2 className="font-bold">${item.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCards;
