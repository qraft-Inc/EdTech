import React from "react";
import BaseButton from "@/common/views/buttons/base-button";
import { LocaleModel } from "@/common/models/locales.model";

const AddCoursesButton = (props: LocaleModel) => {
  return (
    <div className=" items-center justify-between m-4 lg:flex md:flex">
      <div className="col-span-1">
        <h1 className="text-2xl font-semibold text-blue-950">
          {props.t("trainer:your_courses")}
        </h1>
      </div>
      <div className="col-span-1">
        <BaseButton label={props.t("trainer:add_course")} />
      </div>
    </div>
  );
};

export default AddCoursesButton;
