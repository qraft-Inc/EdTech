import React from "react";
import Link from "next/link";
import { SidebarLinkModel } from "@/common/models/sidebar-link.model";

const NavbarSignUpButton = (props: SidebarLinkModel) => {
  return (
    <Link
      href={props.href}
      className="flex items-center justify-center bg-blue-900 text-white font-semibold px-8 h-9 mx-2 rounded-sm hover:bg-blue-800"
    >
      {props.link}
    </Link>
  );
};

export default NavbarSignUpButton;
