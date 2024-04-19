import React from "react";

const CategoryDropdown = () => {
  return (
    <div className="flex justify-between items-center w-[25%] rounded-md box-border shadow-lg h-12 bg-orange-400 p-3">
      <select className="block appearance-none w-[100%] bg-inherit text-white outline-none">
        <option value="" disabled selected hidden>
          Categories
        </option>
        <option>Marketing & Sales</option>
        <option>Digital Marketing</option>
        <option>Javascritp Begiiners Course</option>
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  );
};

export default CategoryDropdown;
