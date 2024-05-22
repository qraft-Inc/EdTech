import React from "react";
import SideBar from "@/common/views/widgets/sidebar.widget";

const AdminLayout = ({ child }: { child: React.ReactNode }) => {
  return (
    <div className="h-screen bg-white flex  items-start justify-center overflow-hidden">
      <SideBar />
      {child}
    </div>
  );
};

export default AdminLayout;
