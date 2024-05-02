import React from "react";
import { BaseButtonTypes } from "@/common/views/buttons/types/base-button.types";

const BaseButton = (props: BaseButtonTypes) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      type="button"
      className="p-2 bg-orange-400 text-blue-950 hover:bg-orange-500 rounded-md px-4 w-full"
    >
      {props.label}
    </button>
  );
};

export default BaseButton;
