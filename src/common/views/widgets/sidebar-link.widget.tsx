import React from "react";
import Link from "next/link";
import { SidebarLinkModel } from "@/common/models/sidebar-link.model";

const SidebarLink = (props: SidebarLinkModel) => {
  return (
    <Link
      href={props.href}
      className="w-full flex items-center justify-center lg:justify-start md:justify-start bg-white rounded-sm shadow-lg h-16 hover:bg-blue-200 hover:cursor-pointer p-2 my-4"
    >
      {props.icon}
      <h3 className=" hidden text-blue-950 lg:block md:block">{props.link}</h3>
    </Link>
  );
};

export default SidebarLink;
