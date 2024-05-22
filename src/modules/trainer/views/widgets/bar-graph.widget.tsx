"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  Tooltip,
  PointElement,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { LineGraphModel } from "@/modules/trainer/models/graph.model";

ChartJS.register(CategoryScale, PointElement, BarElement, Tooltip);

const BarGraph = (props: LineGraphModel) => {
  const [Chart, setChart] = React.useState<typeof Bar | null>(null);

  React.useEffect(() => {
    import("react-chartjs-2").then((module) => {
      setChart(module.Bar);
    });
  }, []);

  if (!Chart) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white border-1 border-gray-300 shadow-lg rounded-sm p-4">
      <h3 className=" text-black font-thin mb-4">{props.label}</h3>
      <Bar data={props.data} width={100} height={50} />
    </div>
  );
};

export default BarGraph;
