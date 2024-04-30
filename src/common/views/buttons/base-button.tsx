import React from "react";

const BaseButton = () => {
  return (
    <button
      type="button"
      className="p-2 bg-orange-400 text-blue-950 hover:bg-orange-500 rounded-md "
      data-twe-ripple-init
      data-twe-ripple-color="light"
    >
      Call to action
    </button>
  );
};

export default BaseButton;
