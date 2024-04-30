import React from "react";
import { useTranslation } from "react-i18next";
import Carousel from "@/modules/courses/views/widgets/carousel.widget";
import SectionHeader from "@/common/views/widgets/section-header";
import CourseCard from "@/modules/courses/views/widgets/course-card";

const Courses = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col items-center">
      <Carousel t={t} />
      <SectionHeader header="All Courses" />
      <div className="grid grid-cols-12 gap-4 m-4">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

export default Courses;
