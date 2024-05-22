import React from "react";
import ContentCardImage from "@/modules/trainer/views/widgets//content-card-image.widget";

const ContentCard = () => {
  return (
    <div className="col-span-12 md:col-span-3 lg:col-span-3 shadow-lg rounded-sm ">
      <ContentCardImage />
    </div>
  );
};

export default ContentCard;
