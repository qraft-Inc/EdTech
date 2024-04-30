import React from "react";
import TrainerCourseCardImage from "@/modules/trainer/views/widgets/trainer-course-card-image.widget";
import TrainerCourseCardContent from "@/modules/trainer/views/widgets/trainer-course-card-content.widget";

const TrainerCourseCard = () => {
  return (
    <div className="col-span-12 md:col-span-3 lg:col-span-3 bg-white border-1 border-gray-300 shadow-lg rounded-sm p-4 ">
      <TrainerCourseCardImage />
      <TrainerCourseCardContent />
    </div>
  );
};

export default TrainerCourseCard;
