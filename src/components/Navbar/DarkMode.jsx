import React, { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

function DarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const ele = document.documentElement;
  //   access the html document element

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      ele.classList.add("dark");
    } else {
      ele.classList.remove("light");
      ele.classList.remove("dark");
    }
  });
  return (
    <div className="relative">
      <FaMoon
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`text-xl text-gray-600 items-center w-8 absolute cursor-pointer right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <FaSun
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`text-xl items-center w-8 cursor-pointer right-0 z-10 ${
          theme === "light" ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}

export default DarkMode;
