import React from "react";
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const serviceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: "Free Shipping",
    description: "Free Shipping On All Order",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
    title: "Safe Money",
    description: "30 Days Back Money",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "Secure Payment",
    description: "All Payment Secure",
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
    title: "Online Support 24/7",
    description: "Techical Support 24/7",
  },
];

function Services() {
  return (
    <div>
      <div className="container mt-10 md:my-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {serviceData.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-start sm:flex-row gap-4"
            >
              {data.icon}
              <div>
                <h1 className="text-lg font-semibold">{data.title}</h1>
                <p className="text-gray-400 text-sm">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
