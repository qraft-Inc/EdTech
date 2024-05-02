import React from "react";

const BuyButton = () => {
  return (
    <div className=" flex items-center justify-between bg-orange-400 shadow-lg rounded-sm p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="41"
        height="41"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#172554"
        strokeWidth="2"
      >
        <circle cx="10" cy="20.5" r="1" />
        <circle cx="18" cy="20.5" r="1" />
        <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
      </svg>
      <h1 className="text-blue-950 font-extralight text-2xl">Shs 150,000</h1>
    </div>
  );
};

export default BuyButton;
