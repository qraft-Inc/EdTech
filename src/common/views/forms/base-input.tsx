import React from "react";
import { BaseInputTypes } from "@/common/views/forms/types/base-input.types";

const BaseInput = (props: BaseInputTypes) => {
  return (
    <div>
      <input
        type="text"
        className=" w-80 md:80 lg:w-96 border-1 border-gray-200 rounded-sm h-10 outline-none pl-1 my-4"
        value={props.value}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
        placeholder={props.placeholder}
        disabled={props.disabled}
      />
    </div>
  );
};

export default BaseInput;
