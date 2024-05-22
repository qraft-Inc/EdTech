import React from "react";
import BaseButton from "@/common/views/buttons/base-button";
import { LocaleModel } from "@/common/models/locales.model";

type ButtonProps = LocaleModel & { onClick: () => void };

const AddCoursesButton = ({ t, onClick }: ButtonProps) => {
  return (
    <div className=" items-center justify-between m-4 lg:flex md:flex">
      <div className="col-span-1">
        <h1 className="text-2xl font-semibold text-blue-950">
          {t("trainer:your_courses")}
        </h1>
      </div>
      <div className="col-span-1">
        <BaseButton label={t("trainer:add_course")} onClick={onClick} />
      </div>
    </div>
  );
};

export default AddCoursesButton;
