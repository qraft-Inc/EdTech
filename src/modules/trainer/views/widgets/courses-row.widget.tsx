import React from "react";
import TrainerCourseCard from "@/modules/trainer/views/widgets/trainer-course-card.widget";

const CourseRow = () => {
  return (
    <div className="grid grid-cols-12 gap-4 m-4">
      <TrainerCourseCard />
      <TrainerCourseCard />
      <TrainerCourseCard />
      <TrainerCourseCard />
    </div>
  );
};

export default CourseRow;
