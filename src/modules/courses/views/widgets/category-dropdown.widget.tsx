"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { BaseSelectTypes } from "@/common/views/forms/types/base-select";
import { ArrowDropDown } from "@mui/icons-material";

const CategoryDropdown = ({ onChange, value, options }: BaseSelectTypes) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          endContent={<ArrowDropDown className=" text-5xl" />}
          className=" w-[100%] md:w-[25%] lg:w-[25%]  bg-orange-400 rounded-md h-11 outline-none px-3 my-4 flex justify-between items-center"
        >
          {value}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" onAction={onChange}>
        {options.map((key: any) => (
          <DropdownItem key={key}>{key}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default CategoryDropdown;
