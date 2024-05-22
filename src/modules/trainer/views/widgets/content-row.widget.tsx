import React from "react";
import TrainerCourseCard from "@/modules/trainer/views/widgets/trainer-course-card.widget";
import ContentCard from "@/modules/trainer/views/widgets/content-card.widget";

const ContentRow = () => {
  return (
    <div className="grid grid-cols-12 gap-4 m-4">
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
    </div>
  );
};

export default ContentRow;
