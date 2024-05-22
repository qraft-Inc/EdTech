import { SectionHeaderProps } from "@/common/models/section-header-model";
import React from "react";

const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div className="grid  m-4">
      <h2 className=" text-2xl font-semibold text-blue-950">{props.header}</h2>
    </div>
  );
};

export default SectionHeader;
