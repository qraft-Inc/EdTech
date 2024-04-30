import React from "react";
import AddCoursesButton from "@/modules/trainer/views/widgets/add-courses-button.widget";
import CourseRow from "@/modules/trainer/views/widgets/courses-row.widget";

const TrainerCourses = () => {
  return (
    <div className="h-screen w-full overflow-auto">
      <AddCoursesButton />
      <CourseRow />
    </div>
  );
};

export default TrainerCourses;
