import React from "react";
import axios from "axios";
import Logo from "@/common/views/widgets/logo.widget";
import NavbarLinks from "@/common/views/widgets/navbar-links.widget";
import Cart from "@/common/views/widgets/cart.widget";
import Hamburger from "@/common/views/widgets/hamburder.widget";
import Notification from "@/common/views/widgets/notification.widget";
import Avatar from "@/common/views/widgets/avatar.widget";
import ProfileDropdown from "@/common/views/widgets/profile-dropdown.widget";

const Navbar = () => {
  return (
    // <!-- Main navigation container -->
    <nav className="flex-no-wrap sticky top-0 z-50 flex w-full items-center justify-between bg-white shadow-lg lg:flex-wrap lg:justify-start lg:py-4 border-b-1  border-gray-300">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        {/* <!-- Hamburger button for mobile view --> */}
        <Hamburger />
        <Logo />
        {/* <!-- Right elements --> */}
        <div className="relative flex items-center">
          <NavbarLinks />
          <Cart />
          <div
            className="relative"
            data-twe-dropdown-ref
            data-twe-dropdown-alignment="end"
          >
            {/* <Notification /> */}
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
