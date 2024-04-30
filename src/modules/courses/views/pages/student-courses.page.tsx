import React from "react";
import { useTranslation } from "react-i18next";
import CourseProgress from "@/modules/courses/views/widgets/course-progress-card.widget";
import CourseCard from "@/modules/courses/views/widgets/course-card";
import SectionHeader from "@/common/views/widgets/section-header";

const StudentCourses = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="grid  gap-4 m-4">
        <div className="grid grid-cols-12 gap-4 m-4">
          <CourseProgress />
          <CourseProgress />
          <CourseProgress />
        </div>
      </div>
      <SectionHeader header={t("recomended")} />
      <div className="grid grid-cols-12 gap-4 m-4">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

export default StudentCourses;
