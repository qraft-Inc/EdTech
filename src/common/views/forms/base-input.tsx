import React from "react";
import { BaseInputTypes } from "@/common/views/forms/types/base-input";

const BaseInput = ({
  value,
  placeholder,
  disabled,
  onChange,
}: BaseInputTypes) => {
  return (
    <div>
      <input
        type="text"
        className=" w-[100%] md:w-[100%] lg:w-[100%] border-1 border-gray-200 rounded-sm h-11 outline-none pl-3 my-4"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};

export default BaseInput;
