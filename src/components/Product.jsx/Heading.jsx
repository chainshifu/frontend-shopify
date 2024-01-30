import React from "react";

function Heading({ title, subtitle }) {
  return (
    <div className="text-center max-w-[600px] mx-auto mb-10 space-y-2">
      <h1 className="text-3xl lg:text-4xl font-bold">{title}</h1>
      <p className="text-xs lg:text-sm text-gray-400">{subtitle}</p>
    </div>
  );
}

export default Heading;
