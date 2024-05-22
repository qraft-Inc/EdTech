import React from "react";
import BarGraph from "@/modules/trainer/views/widgets/bar-graph.widget";
import { GraphData } from "@/modules/trainer/models/graph.model";
import { LocaleModel } from "@/common/models/locales.model";

const BarGraphRow = (props: LocaleModel) => {
  const enroll: GraphData = {
    labels: [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ],
    datasets: [
      {
        label: props.t("trainer:enrollment_time"),
        backgroundColor: "#214484",
        borderColor: "#214484",
        borderWidth: 1,
        data: [2, 10, 3, 7, 5, 3, 20, 8, 14, 10, 11, 12],
      },
    ],
  };
  const revenue: GraphData = {
    labels: [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ],
    datasets: [
      {
        label: props.t("trainer:revenue_time"),
        backgroundColor: "#214484",
        borderColor: "#214484",
        borderWidth: 1,
        data: [90, 50, 100, 1000, 55, 30, 20, 86, 140, 120, 11, 12],
      },
    ],
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-4 gap-4">
      <BarGraph
        data={enroll}
        label={props.t("trainer:enrollment_top_courses")}
      />
      <BarGraph data={revenue} label={props.t("trainer:revenue_top_courses")} />
    </div>
  );
};

export default BarGraphRow;
