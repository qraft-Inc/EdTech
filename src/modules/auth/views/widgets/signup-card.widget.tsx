import React from "react";
import BaseInput from "@/common/views/forms/base-input";
import BaseButton from "@/common/views/buttons/base-button";
import { LocaleModel } from "@/common/models/locales.model";

const SignUpCard = (props: LocaleModel) => {
  return (
    <div className="flex flex-col items-center justify-center w-[30%] border-1 border-gray-200 bg-white rounded-sm p-4 m-4">
      <h2 className="text-2xl text-blue-950 font-semibold">
        {props.t("sign_up")}
      </h2>
      {/* <BaseInput placeholder="Email" /> */}
      {/* <BaseInput placeholder="Password" /> */}
      {/* <BaseInput placeholder="Confirm Password" /> */}
      <BaseButton label={props.t("sign_up")} />
    </div>
  );
};

export default SignUpCard;
