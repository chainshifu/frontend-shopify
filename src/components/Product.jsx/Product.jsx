import React from "react";
import Heading from "./Heading";
import ProductCards from "./ProductCards";
import Watch from "../../assets/images/smatch_watch_1.png";
import PowerBank from "../../assets/images/powerbank_1.png";
import AirPod from "../../assets/images/air_pod_pro1.png";
import GamingMouse from "../../assets/images/gaming_mouse_1.png";
import Watch_2 from "../../assets/images/smart_watch2.png";
import PowerBank_2 from "../../assets/images/powerbank_2.png";
import AirPod_2 from "../../assets/images/air_pod_gen3.png";
import GamingMouse_2 from "../../assets/images/gaming_mouse_2.png";
import ProductCards2 from "./ProductCards2";

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
    id: 4,
    image: GamingMouse,
    title: "Gaming Mouse",
    price: "50",
    aosDelay: "600",
  },
];

const ProductData_2 = [
  {
    id: 1,
    image: Watch_2,
    title: "Apple Watch",
    price: "699",
    aosDelay: "0",
  },
  {
    id: 2,
    image: PowerBank_2,
    title: "Power Bank",
    price: "100",
    aosDelay: "200",
  },
  {
    id: 3,
    image: AirPod_2,
    title: "Air Pod",
    price: "120",
    aosDelay: "400",
  },
  {
    id: 4,
    image: GamingMouse_2,
    title: "Gaming Mouse",
    price: "50",
    aosDelay: "600",
  },
];

function Product({ handleOrderPopup }) {
  return (
    <div>
      <div className="container">
        <Heading title="Our Products" subtitle="Explore Our Products" />
        <ProductCards data={ProductData} handleOrderPopup={handleOrderPopup} />
        <ProductCards2
          data={ProductData_2}
          handleOrderPopup={handleOrderPopup}
        />
      </div>
    </div>
  );
}

export default Product;
