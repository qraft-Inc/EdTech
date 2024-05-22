import React from "react";
import Badge from "@/modules/trainer/views/widgets/badge.widget";
import { LocaleModel } from "@/common/models/locales.model";

const FilterContentBadgeRow = (props: LocaleModel) => {
  return (
    <div className="grid grid-cols-12 gap-4 m-4">
      <Badge label={props.t("trainer:videos")} />
      <Badge label={props.t("trainer:documents")} />
    </div>
  );
};

export default FilterContentBadgeRow;
