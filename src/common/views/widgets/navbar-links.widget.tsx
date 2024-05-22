"use client";
import React from "react";
import Link from "next/link";
import { SignedIn } from "@clerk/nextjs";
import { useTranslation } from "react-i18next";
import { SharedStore } from "@/common/stores/shared-store";
import { useAuth } from "@clerk/clerk-react";
import { useStore } from "@/common/stores/base-store";
import NavbarButtons from "@/common/views/widgets/navbar-buttons.widget";

const NavbarLinks = () => {
  const { t } = useTranslation();
  const { userId } = useAuth();
  const {
    store: { trainer },
  } = useStore<SharedStore>(SharedStore);

  const route: string =
    trainer?.userId === userId ? "/trainer-dashboard" : "/train";

  // console.log(typeof trainer, trainer?.userId);

  return (
    <div
      className="!visible hidden  basis-[100%] lg:!flex lg:basis-auto"
      id="navbarSupportedContent1"
      data-twe-collapse-item
    >
      <ul
        className="list-style-none me-auto flex flex-col ps-0 lg:flex-row"
        data-twe-navbar-nav-ref
      >
        <SignedIn>
          <li
            className="mb-1 lg:mb-0 lg:pe-2 hover:border-b-3 border-b-orange-500"
            data-twe-nav-item-ref
          >
            <Link
              className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
              href="/"
              data-twe-nav-link-ref
            >
              {t("browse")}
            </Link>
          </li>
        </SignedIn>
        <SignedIn>
          <li
            className="mb-1 lg:mb-0 lg:pe-2 hover:border-b-3 border-b-orange-500"
            data-twe-nav-item-ref
          >
            <Link
              className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
              href={route}
              data-twe-nav-link-ref
            >
              {t("train")}
            </Link>
          </li>
        </SignedIn>
      </ul>
      <NavbarButtons />
    </div>
  );
};

export default NavbarLinks;
