import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

const menuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
];

function Navbar() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white relative z-40 duration-200">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          <div className="flex gap-5 items-center">
            <a
              href="#"
              className="text-primary
            font-semibold
            text-2xl
            uppercase
            tracking-windest
            sm:text-3xl
            "
            >
              Eshop
            </a>
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {menuLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="
                    inline-block 
                    px-4 f
                    ont-semibold 
                    text-gray-500
                    hover:text-black
                    hover:dark:text-white
                    duration-200
                    "
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoSearchOutline className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>
            <button className="relative p-3">
              <FaShoppingCart className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex justify-center items-center text-xs">
                5
              </div>
            </button>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
