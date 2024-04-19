import React from "react";
import CourseCardImage from "@/modules/courses/views/widgets/course-card-image.widget";
import CourseCardContent from "@/modules/courses/views/widgets/course-card-content.widget";

const CourseCard = () => {
  return (
    <div className="flex flex-col justify-start items-center col-span-12 md:col-span-4 lg:col-span-3 rounded-sm shadow-lg h-96 bg-white p-3">
      <CourseCardImage />
      <CourseCardContent />
    </div>
  );
};

export default CourseCard;
