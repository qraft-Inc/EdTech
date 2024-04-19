import React from "react";
import { LocaleModel } from "@/modules/courses/models/locales.model";

const Policies = (props: LocaleModel) => {
  return (
    <div>
      <p className="mb-4 text-neutral-300">
        <a href="#!">{props.t("terms")}</a>
      </p>
      <p className="mb-4 text-neutral-300">
        <a href="#!">{props.t("privacy")}</a>
      </p>
    </div>
  );
};

export default Policies;
