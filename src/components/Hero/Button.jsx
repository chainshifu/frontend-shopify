import React from "react";

function Button({ text, bgColor, textColor }) {
  return (
    <button
      className={`${bgColor} ${textColor} cursor-pointer rounded-md py-2 px-8 relative z-10 hover:scale-105 duration-300`}
    >
      {text}
    </button>
  );
}

export default Button;
