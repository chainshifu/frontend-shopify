import React from "react";
import Heading from "./Heading";
import ProductCards from "./ProductCards";
import Watch from "../../assets/images/smatch_watch_1.png";
import PowerBank from "../../assets/images/powerbank_1.png";
import AirPod from "../../assets/images/air_pod_pro1.png";
import GamingMouse from "../../assets/images/gaming_mouse_1.png";

const ProductData = [
  {
    id: 1,
    image: Watch,
    title: "Apple Watch",
    price: "699",
    aosDelay: "0",
  },
  {
    id: 2,
    image: PowerBank,
    title: "Power Bank",
    price: "100",
    aosDelay: "200",
  },
  {
    id: 3,
    image: AirPod,
    title: "Air Pod",
    price: "120",
    aosDelay: "400",
  },
  {
    id: 1,
    image: GamingMouse,
    title: "Gaming Mouse",
    price: "50",
    aosDelay: "600",
  },
];

function Product() {
  return (
    <div>
      <div className="container">
        <Heading title="Our Products" subtitle="Explore Our Products" />
        <ProductCards data={ProductData} />
      </div>
    </div>
  );
}

export default Product;
