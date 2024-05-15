import React from "react";
import { BaseButtonTypes } from "@/common/views/buttons/types/base-button";
import { Button } from "@mui/material";

const PublishButton = (props: BaseButtonTypes) => {
  return (
    <Button
      onClick={props.onClick}
      disabled={props.disabled}
      type="button"
      className="p-2 bg-[#204484] text-white rounded-md hover:bg-[#053b9f] shadow-sm hover:shadow-xl"
    >
      {props.label}
    </Button>
  );
};

export default PublishButton;
