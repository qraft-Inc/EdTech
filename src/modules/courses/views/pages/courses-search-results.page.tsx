import React from "react";
import { useTranslation } from "react-i18next";
import CourseCard from "@/modules/courses/views/widgets/course-card";
import SectionHeader from "@/common/views/widgets/section-header";

const CoursesSearchResults = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <SectionHeader header={t("search_results", { search: "Next JS" })} />
      <div className="grid grid-cols-12 gap-4 m-4">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

export default CoursesSearchResults;
