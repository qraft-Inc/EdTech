import React from "react";
import { useTranslation } from "react-i18next";
import StatisticsCardRow from "@/modules/trainer/views/widgets/dashboard-statistics-card-row.widget";
import FilterGraphBadgeRow from "@/modules/trainer/views/widgets/filter-graph-badge-row.widget";
import LineGraphRow from "@/modules/trainer/views/widgets/line-graph-row.widget";
import BarGraphRow from "@/modules/trainer/views/widgets/bar-graph-row.widget";

const TrainerDashboard = () => {
  const { t } = useTranslation();
  return (
    <div className="h-screen w-full overflow-auto">
      <StatisticsCardRow t={t} />
      <FilterGraphBadgeRow t={t} />
      <LineGraphRow t={t} />
      <BarGraphRow t={t} />
    </div>
  );
};

export default TrainerDashboard;
