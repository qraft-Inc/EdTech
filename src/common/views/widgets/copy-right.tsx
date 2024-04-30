import React from "react";
import { LocaleModel } from "@/common/models/locales.model";

const Copyright = (props: LocaleModel) => {
  return (
    <div className="bg-black/5 p-6 text-center">
      <span className="text-neutral-300">{props.t("copyright")}:</span>
      <a
        className="font-semibold text-neutral-300"
        href="https://tw-elements.com/"
      >
        {props.t("app_name")}
      </a>
    </div>
  );
};

export default Copyright;
