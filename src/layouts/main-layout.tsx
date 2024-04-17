import React from "react";
import Navbar from "@/common/views/widgets/navbar.widget";
import Courses from "@/modules/courses/views/pages/courses.page";

const MainLayout = () => {
  return (
    <div className="h-screen bg-white">
      <Navbar />
      <Courses />
      <p className="absolute">Hello</p>
    </div>
  );
};

export default MainLayout;
