import React from "react";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import { BaseInputTypes } from "@/common/views/forms/types/base-input";

const CashInput = ({
  value,
  placeholder,
  disabled,
  onChange,
}: BaseInputTypes) => {
  return (
    <Input
      type="number"
      className="w-[100%] md:w-[100%] lg:w-[100%] border-1 border-gray-200 rounded-sm h-11 outline-none pl-3 my-4 border-b-0 focus:outline-none"
      id="outlined-adornment-amount"
      startAdornment={<InputAdornment position="start">Shs</InputAdornment>}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      disabled={disabled}
    />
  );
};

export default CashInput;
