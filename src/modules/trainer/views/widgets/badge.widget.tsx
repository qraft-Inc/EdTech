import React from "react";
import { BadgeModel } from "@/modules/trainer/models/badge.model";

const Badge = (props: BadgeModel) => {
  return (
    <div className="col-span-3 md:col-span-2 lg:col-span-2 bg-slate-300 p-1 rounded-2xl flex items-center justify-center">
      <p className=" text-sm text-blue-900 font-thin">{props.label}</p>
    </div>
  );
};

export default Badge;
