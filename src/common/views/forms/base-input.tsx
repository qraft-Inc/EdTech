import React from "react";
import { BaseInputTypes } from "@/common/views/forms/types/base-input.types";

const BaseInput = (props: BaseInputTypes) => {
  return (
    <div>
      <input
        type="text"
        className=" w-96 border-1 border-gray-200 rounded-sm h-10 outline-none pl-1 my-4"
        onChange={props.onChange}
        placeholder={props.placeholder}
        disabled={props.disabled}
      />
    </div>
  );
};

export default BaseInput;
