import React from "react";
import DashboardStatisticsCard from "@/modules/trainer/views/widgets/dashboard-statistics-card.widget";
import { LocaleModel } from "@/common/models/locales.model";

const StatisticsCardRow = (props: LocaleModel) => {
  return (
    <div className="grid grid-cols-12 gap-4 m-4">
      <DashboardStatisticsCard
        value={30}
        title={props.t("trainer:total_students")}
        svg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f9ce5e"
            strokeWidth="2"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        }
      />
      <DashboardStatisticsCard
        value={30}
        title={props.t("trainer:percentage_completion")}
        svg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f9ce5e"
            strokeWidth="2"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        }
      />
      <DashboardStatisticsCard
        value={30}
        title={props.t("trainer:average_rating")}
        svg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f9ce5e"
            strokeWidth="2"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        }
      />
    </div>
  );
};

export default StatisticsCardRow;
