import React from "react";
import { useTranslation } from "react-i18next";
import AddCoursesButton from "@/modules/trainer/views/widgets/add-courses-button.widget";
import CourseRow from "@/modules/trainer/views/widgets/courses-row.widget";

const TrainerCourses = () => {
  const { t } = useTranslation();
  return (
    <div className="h-screen w-full overflow-auto">
      <AddCoursesButton t={t} />
      <CourseRow />
    </div>
  );
};

export default TrainerCourses;
