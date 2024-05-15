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
        className=" w-80 md:80 lg:w-96 border-1 border-gray-200 rounded-sm h-11 outline-none pl-3 my-4"
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
