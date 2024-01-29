import React from "react";
import Button from "../Hero/Button";
import Earphone from "../../assets/images/earphone.png";
import Watch from "../../assets/images/watch.png";
import Macbook from "../../assets/images/macbook_pro.png";

function Category() {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div className="mb-4">
              <p className="mb-[2px] text-gray-400">Enjoy</p>
              <p className="text-2xl mb-[2px] font-semibold">With</p>
              <p className="text-3xl lg:text-4xl font-bold mb-2 opacity-20">
                Earphone
              </p>
              <Button
                text="Browse"
                bgColor="bg-primary"
                textColor="text-white"
              />
            </div>
            <div>
              <img
                src={Earphone}
                alt=""
                className="absolute w-[300px] -right-0 top-1/2 -translate-y-1/2"
              />
            </div>
          </div>

          <div className="py-10 pl-5 bg-gradient-to-br from-bgYellow to-bgYellow/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div className="mb-4">
              <p className="mb-[2px] text-white">Enjoy</p>
              <p className="text-2xl mb-[2px] font-semibold">With</p>
              <p className="text-3xl lg:text-4xl font-bold mb-2 opacity-45">
                Gadget
              </p>
              <Button
                text="Browse"
                bgColor="bg-white"
                textColor="text-bgYellow"
              />
            </div>
            <div>
              <img
                src={Watch}
                alt=""
                className="absolute w-[300px] -right-0 top-1/3 -translate-y-1/2"
              />
            </div>
          </div>

          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div className="mb-4">
              <p className="mb-[2px] text-white">Enjoy</p>
              <p className="text-2xl mb-[2px] font-semibold">With</p>
              <p className="text-3xl lg:text-4xl font-bold mb-2 opacity-45">
                Laptop
              </p>
              <Button
                text="Browse"
                bgColor="bg-white"
                textColor="text-primary"
              />
            </div>
            <div>
              <img
                src={Macbook}
                alt=""
                className="absolute w-[200px] sm:w-[300px] xl:w-[350px] -right-5 top-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
