import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart, FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

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

const dropDownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
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
              Shopify
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
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[4px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>
                  <div className="absolute z-[1000] hidden group-hover:block w-[200px] bg-white shadow-md rounded-md dark:bg-gray-900 p-2 dark:text-white">
                    <ul className="space-y-2">
                      {dropDownLinks.map((item, index) => (
                        <li key={index}>
                          <a
                            href={item.link}
                            className="
                          text-gray-500
                          dark:hover:text-white
                          duration-200
                          hover:bg-primary/20
                          w-full
                          inline-block
                          rounded-md
                          p-2
                          font-semibold
                          "
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                className="search-bar"
              />
              <IoSearchOutline className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>
            <button className="relative p-3">
              <FaShoppingCart className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex justify-center items-center text-xs">
                5
              </div>
            </button>
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
