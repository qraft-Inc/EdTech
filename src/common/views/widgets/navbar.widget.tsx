import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "@/common/views/widgets/logo.widget";
import NavbarLinks from "@/common/views/widgets/navbar-links.widget";
import Cart from "@/common/views/widgets/cart.widget";
import Hamburger from "@/common/views/widgets/hamburder.widget";
import Notification from "@/common/views/widgets/notification.widget";
import Avatar from "@/common/views/widgets/avatar.widget";
import ProfileDropdown from "@/common/views/widgets/profile-dropdown.widget";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    // <!-- Main navigation container -->
    <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        {/* <!-- Hamburger button for mobile view --> */}
        <Hamburger />
        <Logo />
        <NavbarLinks />
        {/* <!-- Right elements --> */}
        <div className="relative flex items-center">
          <Cart />
          <div
            className="relative"
            data-twe-dropdown-ref
            data-twe-dropdown-alignment="end"
          >
            <Notification />
          </div>
          <div
            className="relative"
            data-twe-dropdown-ref
            data-twe-dropdown-alignment="end"
          >
            <Avatar />
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
