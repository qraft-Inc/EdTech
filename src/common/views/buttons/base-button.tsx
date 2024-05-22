import React from "react";
import { BaseButtonTypes } from "@/common/views/buttons/types/base-button";
import { Button } from "@mui/material";

const BaseButton = (props: BaseButtonTypes) => {
  return (
    <Button
      onClick={props.onClick}
      disabled={props.disabled}
      type="button"
      className="p-2 bg-orange-400 text-white hover:bg-orange-500 rounded-md my-4"
    >
      {props.label}
    </Button>
  );
};

export default BaseButton;
