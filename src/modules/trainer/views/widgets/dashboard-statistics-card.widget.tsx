import React from "react";
import { DashboardStatisticsCardModel } from "../../models/dashboard-statistics-card.model";

const DashboardStatisticsCard = (props: DashboardStatisticsCardModel) => {
  return (
    <div className="col-span-12 md:col-span-4 lg:col-span-4 bg-white border-1 border-gray-300 shadow-lg rounded-sm p-4 h-40">
      <h1 className=" text-5xl text-blue-950 font-thin">{props.value}</h1>
      <h1 className=" text-sm text-blue-950 font-thin">{props.title}</h1>
      <div className="flex justify-end w-full mt-8">{props.svg}</div>
    </div>
  );
};

export default DashboardStatisticsCard;
