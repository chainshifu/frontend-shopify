import React from "react";
import Slider from "react-slick";
import Headphone from "../../assets/images/Wireless-Headphone.png";
import Virtual from "../../assets/images/vr.png";
import Macbook from "../../assets/images/macbook-pro.png";
import Button from "./Button";

const HeroData = [
  {
    id: 1,
    image: Headphone,
    subtitle: "Beats Solo",
    title: "Wireless",
    title_1: "Headphone",
  },
  {
    id: 2,
    image: Virtual,
    subtitle: "Beats Solo",
    title: "Wireless",
    title_1: "Virtual",
  },
  {
    id: 3,
    image: Macbook,
    subtitle: "Beats Solo",
    title: "Branded",
    title_1: "Laptops",
  },
];

function Hero({ handleOrderPopup }) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    //   autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <section className="container">
      <div className="hero overflow-hidden min-h-[550px] sm:min-h-[650px] rounded-3xl flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col justify-center gap-4 sm:pl-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1 className="text-2xl sm:text-3xl lg:text-2xl font-bold">
                      {data.subtitle}
                    </h1>
                    <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold xl:mb-4">
                      {data.title}
                    </h1>
                    <h1 className="text-4xl sm:text-[60px] md:text-[80px] xl:text-[130px] uppercase font-bold text-white dark:text-white/5">
                      {data.title_1}
                    </h1>
                    <div
                      className="sm:mt-3 lg:mt-4 xl:mt-[40px]"
                      onClick={handleOrderPopup}
                    >
                      <Button
                        text="Shop By Categories"
                        bgColor="bg-primary"
                        textColor="text-white"
                      />
                    </div>
                  </div>
                  <div className="order-1 sm:order-2">
                    <div>
                      <img
                        src={data.image}
                        alt=""
                        className="
                    w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-40
                    "
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Hero;
