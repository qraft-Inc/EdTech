import React from "react";
import Badge from "@/modules/trainer/views/widgets/badge.widget";
import { LocaleModel } from "@/common/models/locales.model";

const FilterGraphBadgeRow = (props: LocaleModel) => {
  return (
    <div className="grid grid-cols-12 gap-4 m-4">
      <Badge label={props.t("trainer:week")} />
      <Badge label={props.t("trainer:month")} />
      <Badge label={props.t("trainer:quarter")} />
      <Badge label={props.t("trainer:months")} />
      <Badge label={props.t("trainer:year")} />
    </div>
  );
};

export default FilterGraphBadgeRow;
