import React from "react";
import { LocaleModel } from "@/modules/courses/models/locales.model";

const AboutUs = (props: LocaleModel) => {
  return (
    <div>
      <p className="mb-4 text-neutral-300">
        <a href="#!">{props.t("help")}</a>
      </p>
      <p className="mb-4 text-neutral-300">
        <a href="#!">{props.t("faq")}</a>
      </p>
      <p className="mb-4 text-neutral-300">
        <a href="#!">{props.t("investors")}</a>
      </p>
    </div>
  );
};

export default AboutUs;
