import React from "react";
import { useTranslation } from "react-i18next";
import VideoPlayer from "@/common/views/forms/video-player";
import SectionHeader from "@/common/views/widgets/section-header";
import ContentAccordion from "@/common/views/widgets/accordion.widget";
import ContentTabs from "@/modules/courses/views/widgets/tabs.widget";

const StudyCourse = () => {
  const { t } = useTranslation();
  return (
    <div className="grid p-4">
      <SectionHeader header="Next JS The Complete Guide" />
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 md:col-span-8">
          <VideoPlayer />
          <ContentTabs t={t} />
        </div>
        <div className="col-span-12 md:col-span-4">
          <ContentAccordion />
        </div>
      </div>
    </div>
  );
};

export default StudyCourse;
