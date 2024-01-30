import "./App.css";
import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category_2";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Headphone from "./assets/images/Headphone_banner.png";
import Product from "./components/Product.jsx/Product";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: Headphone,
  subtitle: "Air Solo Bass",
  title_2: "Winter Sale",
  description:
    "When you listen to music, you want to the truest possible representation of the artist real sound. Enjoy crip, powerful sound and dramatic noice reduction.",
  bgColor: "#f42c37",
};

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner bannerData={BannerData} />
      <Product />
    </div>
  );
}

export default App;
