import React from "react";
import Link from "next/link";
import { SidebarLinkModel } from "@/common/models/sidebar-link.model";

const NavbarLoginButton = (props: SidebarLinkModel) => {
  return (
    <Link
      href={props.href}
      className="flex items-center justify-center border-1 border-blue-950 text-blue-950 font-semibold px-8 h-9 rounded-sm mx-2 hover:bg-neutral-200"
    >
      {props.link}
    </Link>
  );
};

export default NavbarLoginButton;
