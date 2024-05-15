import React from "react";
import { useTranslation } from "react-i18next";
import {
  Dashboard,
  LibraryBooks,
  PhotoAlbum,
  Money,
} from "@mui/icons-material";
import SidebarLink from "@/common/views/widgets/sidebar-link.widget";

const SideBar = () => {
  const { t } = useTranslation();
  return (
    <div className="h-screen w-[10%] lg:w-[25%] md:w-[25%] bg-white shadow-sm shadow-neutral-200 lg:p-2 mb:p-2 p-1 relative left-0 top-0 bottom-0">
      <SidebarLink
        href="/trainer-dashboard"
        link={t("trainer:dashboard")}
        icon={
          <Dashboard className="text-2xl md:text-3xl lg:text-3xl text-blue-950 md:mr-2 lg:mr-2" />
        }
      />
      <SidebarLink
        href="/trainer-courses"
        link={t("trainer:courses")}
        icon={
          <LibraryBooks className="text-2xl md:text-3xl lg:text-3xl text-blue-950 md:mr-2 lg:mr-2" />
        }
      />
      <SidebarLink
        href="/trainer-content"
        link={t("trainer:content_library")}
        icon={
          <PhotoAlbum className="text-2xl md:text-3xl lg:text-3xl text-blue-950 md:mr-2 lg:mr-2" />
        }
      />
      {/* <SidebarLink
        link={t("trainer:revenue")}
        icon={
          <Money className="text-2xl md:text-3xl lg:text-3xl text-blue-950 md:mr-2 lg:mr-2" />
        }
      /> */}
    </div>
  );
};

export default SideBar;
