import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { GiRotaryPhone } from "react-icons/gi";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-0 pt-5">
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl
"
            >
              Shopify
            </a>
            <p className="text-gray-600 dark:text-white/70  lg:pr-24 pt-3">
              If you've any questions, please email us at{" "}
              <a href="mailto:info@shopify.org" className="text-[#9a3412]">
                info@shopify.org
              </a>{" "}
              or visit our{" "}
              <a href="mailto:info@shopify.org" className="text-[#9a3412]">
                FAQs.
              </a>{" "}
              You can chat with a real live human during operating hours.
            </p>
          </div>

          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8 px-4 col-span-2 sm:col-auto text-gray-600 dark:text-gray-400">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <IoLocationSharp className="sm:text-2xl" />
                  <p>Miami, USA</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <GiRotaryPhone className="sm:text-2xl" />
                  <p>092226666</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full mb-5 opacity-100 dark:opacity-20" />
        <div className="pb-10 text-center">
          <p className="text-gray-500 text-sm font-medium">
            Crafted by <span className="font-bold">Nyein Phyo Aung</span> &copy;{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
