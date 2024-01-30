import "./App.css";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category_2";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
    </div>
  );
}

export default App;
