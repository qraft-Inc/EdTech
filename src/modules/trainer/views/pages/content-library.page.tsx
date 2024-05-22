import React from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "@/common/views/widgets/section-header";
import FilterContentBadgeRow from "@/modules/trainer/views/widgets/filter-content-library-badge-row.widget";
import ContentRow from "@/modules/trainer/views/widgets/content-row.widget";

const ContentLibrary = () => {
  const { t } = useTranslation();
  return (
    <div className="h-screen w-full overflow-auto">
      <SectionHeader header={t("trainer:content_library")} />
      <FilterContentBadgeRow t={t} />
      <ContentRow />
    </div>
  );
};

export default ContentLibrary;
