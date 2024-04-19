import React from "react";
import { useTranslation } from "react-i18next";

const Logo = () => {
  const { t } = useTranslation();
  return (
    <a
      className="mb-4 me-5 ms-2 mt-3 flex items-center hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0 text-xl text-blue-500"
      href="#"
    >
      <img
        src="/logo.png"
        // className="rounded-full"
        style={{ height: 40, width: 100 }}
        alt=""
        loading="lazy"
      />
    </a>
  );
};

export default Logo;
