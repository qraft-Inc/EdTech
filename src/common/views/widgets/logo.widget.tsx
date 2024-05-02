import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Logo = () => {
  const { t } = useTranslation();
  return (
    <a
      className="mb-4 me-5 ms-2 mt-3 flex items-center hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0 text-xl text-blue-500"
      href="#"
    >
      <Image src="/logo.png" width={100} height={40} alt="" loading="lazy" />
    </a>
  );
};

export default Logo;
