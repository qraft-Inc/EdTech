import React from "react";
import { useTranslation } from "react-i18next";
import VideoPlayer from "@/common/views/forms/video-player";
import SectionHeader from "@/common/views/widgets/section-header";
import BuyButton from "@/modules/courses/views/widgets/buy-button.widget";
import ContentAccordion from "@/common/views/widgets/accordion.widget";
import CourseDescription from "../widgets/course-description";

const CourseDetails = () => {
  const { t } = useTranslation();
  return (
    <div className="grid p-4">
      <SectionHeader header="Next JS The Complete Guide" />
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 md:col-span-8">
          <VideoPlayer />
          <CourseDescription />
        </div>
        <div className="col-span-12 md:col-span-4">
          <BuyButton />
          <h3 className=" my-4 text-lg font-medium text-blue-950">
            {t("course_content")}
          </h3>
          <ContentAccordion />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
