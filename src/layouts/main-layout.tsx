import React from "react";
import Navbar from "@/common/views/widgets/navbar.widget";
import Footer from "@/common/views/widgets/footer.widget";

const MainLayout = ({ child }: { child: React.ReactNode }) => {
  return (
    <div className="h-screen bg-white">
      <Navbar />
      {child}
      <Footer />
    </div>
  );
};

export default MainLayout;
