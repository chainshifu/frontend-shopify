import React from "react";
import Button from "../Hero/Button";
import Ps5 from "../../assets/images/ps5.png";
import Virtual from "../../assets/images/vr.png";
import Speaker from "../../assets/images/speaker.png";

function Category2() {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-500/90 to-gray-200 text-white rounded-3xl relative h-[320px] flex items-end">
            <div className="mb-4">
              <p className="mb-[2px] text-white">Enjoy</p>
              <p className="text-2xl mb-[2px] font-semibold">With</p>
              <p className="text-3xl lg:text-4xl font-bold mb-2 opacity-45">
                Laptop
              </p>
              <Button
                text="Browse"
                bgColor="bg-primary"
                textColor="text-white"
              />
            </div>
            <div>
              <img
                src={Ps5}
                alt=""
                className="absolute w-[180px] sm:w-[300px] xl:w-[350px] -right-5 top-1/2 -translate-y-1/2"
              />
            </div>
          </div>

          <div className="py-10 pl-5 bg-gradient-to-br from-bgGreen to-bgGreen text-white rounded-3xl relative h-[320px] flex items-start">
            <div className="mb-4">
              <p className="mb-[2px] text-white">Enjoy</p>
              <p className="text-2xl mb-[2px] font-semibold">With</p>
              <p className="text-3xl lg:text-4xl font-bold mb-2 opacity-30">
                Oculus
              </p>
              <Button
                text="Browse"
                bgColor="bg-white"
                textColor="text-bgGreen"
              />
            </div>
            <div>
              <img
                src={Virtual}
                alt=""
                className="absolute w-[200px] bottom-0 -right-3"
              />
            </div>
          </div>

          <div className="py-10 pl-5 bg-gradient-to-br from-bgBlue to-bgBlue/90 text-white rounded-3xl relative h-[320px] flex items-start">
            <div className="mb-4">
              <p className="mb-[2px] text-white">Enjoy</p>
              <p className="text-2xl mb-[2px] font-semibold">With</p>
              <p className="text-3xl lg:text-4xl font-bold mb-2 opacity-30">
                Speakers
              </p>
              <Button
                text="Browse"
                bgColor="bg-white"
                textColor="text-bgBlue"
              />
            </div>
            <div>
              <img
                src={Speaker}
                alt=""
                className="absolute w-[200px] h-[250px] bottom-0 right-0 lg:-bottom-9 lg:right-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category2;
