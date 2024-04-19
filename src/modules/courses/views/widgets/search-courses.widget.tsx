import React from "react";
import { useTranslation } from "react-i18next";

const SearchCources = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-between  w-[70%] rounded-md box-border shadow-lg h-12 bg-white">
      <input
        className=" w-[80%] h-10 rounded-md pl-4 outline-none"
        placeholder={t("search")}
      />
      <div className="flex items-center justify-center h-full bg-blue-800 w-20 rounded-r-md hover:cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
    </div>
  );
};

export default SearchCources;
